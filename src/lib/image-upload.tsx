import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon, Loader2, Upload, X } from "lucide-react";
import React, { useCallback } from "react";
import { useRef, useState } from "react";

// src/lib/image-upload.ts
export interface ImageUploadConfig {
  maxSize: number; // in bytes
  allowedTypes: string[];
  quality?: number; // for compression (0-1)
  maxWidth?: number;
  maxHeight?: number;
}

 const DEFAULT_IMAGE_CONFIG: ImageUploadConfig = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  quality: 0.8,
  maxWidth: 1920,
  maxHeight: 1080,
};

/**
 * Validate image file
 */
export function validateImage(file: File, config: ImageUploadConfig = DEFAULT_IMAGE_CONFIG): {
  isValid: boolean;
  error?: string;
} {
  if (!file) {
    return { isValid: false, error: 'No file selected' };
  }

  if (file.size > config.maxSize) {
    const maxSizeMB = Math.round(config.maxSize / (1024 * 1024));
    return { isValid: false, error: `File size must be less than ${maxSizeMB}MB` };
  }

  if (!config.allowedTypes.includes(file.type)) {
    return { isValid: false, error: 'Invalid file type. Please upload a JPEG, PNG, WebP, or GIF image.' };
  }

  return { isValid: true };
}

/**
 * Compress and resize image
 */
export function compressImage(
  file: File,
  config: ImageUploadConfig = DEFAULT_IMAGE_CONFIG
): Promise<File> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img;
      const maxWidth = config.maxWidth || width;
      const maxHeight = config.maxHeight || height;

      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width *= ratio;
        height *= ratio;
      }

      // Set canvas size
      canvas.width = width;
      canvas.height = height;

      // Draw and compress
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const compressedFile = new File([blob], file.name, {
                type: file.type,
                lastModified: Date.now(),
              });
              resolve(compressedFile);
            } else {
              reject(new Error('Failed to compress image'));
            }
          },
          file.type,
          config.quality || 0.8
        );
      } else {
        reject(new Error('Failed to get canvas context'));
      }
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
}

/**
 * Generate image preview URL
 */
export function generateImagePreview(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        resolve(e.target.result as string);
      } else {
        reject(new Error('Failed to read file'));
      }
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

/**
 * Upload image to service (example with Cloudinary)
 */
export async function uploadImageToCloudinary(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Failed to upload image');
  }
}

/**
 * Upload image to Vercel Blob
 */
export async function uploadImageToVercelBlob(file: File): Promise<string> {
  try {
    const response = await fetch('/api/upload-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get upload URL');
    }

    const { uploadUrl, downloadUrl } = await response.json();

    // Upload to Vercel Blob
    const uploadResponse = await fetch(uploadUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    });

    if (!uploadResponse.ok) {
      throw new Error('Failed to upload file');
    }

    return downloadUrl;
  } catch (error) {
    console.error('Vercel Blob upload error:', error);
    throw new Error('Failed to upload image');
  }
}



interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  onImageRemove: () => void;
  currentImage?: File | string | null;
  loading?: boolean;
  error?: string;
  config?: typeof DEFAULT_IMAGE_CONFIG;
  className?: string;
}

export function ImageUpload({
  onImageSelect,
  onImageRemove,
  currentImage,
  loading = false,
  error,
  config = DEFAULT_IMAGE_CONFIG,
  className = ""
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (currentImage) {
      if (typeof currentImage === 'string') {
        setPreview(currentImage);
      } else {
        generateImagePreview(currentImage).then(setPreview);
      }
    } else {
      setPreview(null);
    }
  }, [currentImage]);

  const handleFileSelect = useCallback(async (file: File) => {
    const validation = validateImage(file, config);
    if (!validation.isValid) {
      alert(validation.error);
      return;
    }

    try {
      const compressedFile = await compressImage(file, config);
      onImageSelect(compressedFile);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Failed to process image');
    }
  }, [config, onImageSelect]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDragOver(false);
    
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleRemove = () => {
    onImageRemove();
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const maxSizeMB = Math.round(config.maxSize / (1024 * 1024));

  return (
    <div className={`space-y-2 ${className}`}>
      <Label>Featured Image *</Label>
      
      {preview ? (
        <div className="relative group">
          <div className="aspect-video w-full max-w-md border rounded-lg overflow-hidden">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            {loading && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-white" />
              </div>
            )}
          </div>
          <Button
            type="button"
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleRemove}
            disabled={loading}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragOver 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20' 
              : 'border-gray-300 dark:border-gray-700'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <ImageIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Drag and drop an image here, or click to browse
            </p>
            <p className="text-xs text-gray-500">
              Supports JPEG, PNG, WebP, GIF up to {maxSizeMB}MB
            </p>
            <Input
              ref={fileInputRef}
              type="file"
              accept={config.allowedTypes.join(',')}
              onChange={handleFileChange}
              className="hidden"
              disabled={loading}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Choose Image
                </>
              )}
            </Button>
          </div>
        </div>
      )}
      
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}