// src/components/EnhancedCreatePostModal.tsx
"use client";
import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { X, Loader2, Save, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { calculateReadTime } from "@/lib/blog-utils";
import { ImageUpload } from "@/lib/image-upload";
import { RichTextEditor } from "./RichTextEditor";


interface EnhancedCreatePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPostCreated?: (post: any) => void;
}

interface BlogPostForm {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: File | null;
  imageAlt: string;
  readTime: string;
  featured: boolean;
  published: boolean;
  seoTitle: string;
  seoDescription: string;
}

const categories = [
  { value: "web-development", label: "Web Development" },
  { value: "ai-ml", label: "AI & Machine Learning" },
  { value: "tech-trends", label: "Tech Trends" },
  { value: "developer-qa", label: "Developer Q&A" },
  { value: "tutorials", label: "Tutorials" },
  { value: "reviews", label: "Reviews" },
  { value: "career", label: "Career" },
  { value: "productivity", label: "Productivity" },
];

export function EnhancedCreatePostModal({ 
  open, 
  onOpenChange,
  onPostCreated 
}: EnhancedCreatePostModalProps) {
  const [tagInput, setTagInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageError, setImageError] = useState<string>("");
  const [activeTab, setActiveTab] = useState("content");
  const [previewMode, setPreviewMode] = useState(false);

  const form = useForm<BlogPostForm>({
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      category: "",
      tags: [],
      image: null,
      imageAlt: "",
      readTime: "",
      featured: false,
      published: false,
      seoTitle: "",
      seoDescription: "",
    },
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);
      try {
        const formData = new FormData();
        
        if (value.image) {
          formData.append("image", value.image);
        }
        
        // Auto-calculate read time if not provided
        const autoReadTime = value.readTime || calculateReadTime(value.content);
        
        // Auto-generate SEO fields if not provided
        const seoTitle = value.seoTitle || value.title;
        const seoDescription = value.seoDescription || value.excerpt;
        
        const postData = {
          ...value,
          readTime: autoReadTime,
          seoTitle,
          seoDescription,
        };
        
        formData.append("data", JSON.stringify(postData));

        const response = await fetch("/api/blog", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to create blog post");
        }

        const result = await response.json();
        
        if (result.success) {
          onPostCreated?.(result.data);
          onOpenChange(false);
          form.reset();
          setTagInput("");
          setImageError("");
          
          // Show success message
          alert("Blog post created successfully!");
        } else {
          throw new Error(result.error || "Failed to create blog post");
        }
        
      } catch (error) {
        console.error("Error creating post:", error);
        alert("Error creating blog post. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const addTag = (tag: string) => {
    if (tag.trim() && !form.state.values.tags.includes(tag.trim())) {
      form.setFieldValue("tags", [...form.state.values.tags, tag.trim()]);
    }
    setTagInput("");
  };

  const removeTag = (tagToRemove: string) => {
    form.setFieldValue(
      "tags",
      form.state.values.tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      addTag(tagInput);
    }
  };

  const handleImageSelect = (file: File) => {
    form.setFieldValue("image", file);
    setImageError("");
  };

  const handleImageRemove = () => {
    form.setFieldValue("image", null);
    form.setFieldValue("imageAlt", "");
  };

  // Auto-update read time when content changes
  React.useEffect(() => {
    const content = form.state.values.content;
    if (content && !form.state.values.readTime) {
      const autoReadTime = calculateReadTime(content);
      form.setFieldValue("readTime", autoReadTime);
    }
  }, [form.state.values.content]);

  // Auto-generate SEO title from main title
  React.useEffect(() => {
    const title = form.state.values.title;
    if (title && !form.state.values.seoTitle) {
      form.setFieldValue("seoTitle", title);
    }
  }, [form.state.values.title]);

  // Auto-generate SEO description from excerpt
  React.useEffect(() => {
    const excerpt = form.state.values.excerpt;
    if (excerpt && !form.state.values.seoDescription) {
      form.setFieldValue("seoDescription", excerpt);
    }
  }, [form.state.values.excerpt]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden flex flex-col text-black">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-2xl font-serif">Create New Blog Post</DialogTitle>
          <DialogDescription>
            Create an engaging blog post with rich content and SEO optimization.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-4 flex-shrink-0">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-y-auto py-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  form.handleSubmit();
                }}
                className="space-y-6"
              >
                <TabsContent value="content" className="space-y-6 mt-0">
                  {/* Title */}
                  <form.Field
                    name="title"
                    validators={{
                      onChange: ({ value }) =>
                        !value ? "Title is required" : value.length < 5 ? "Title must be at least 5 characters" : undefined,
                    }}
                    children={(field) => (
                      <div className="space-y-2">
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Enter an engaging title for your blog post..."
                          className="text-lg"
                        />
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500">{field.state.meta.errors[0]}</p>
                        )}
                      </div>
                    )}
                  />

                  {/* Excerpt */}
                  <form.Field
                    name="excerpt"
                    validators={{
                      onChange: ({ value }) =>
                        !value ? "Excerpt is required" : value.length < 20 ? "Excerpt must be at least 20 characters" : undefined,
                    }}
                    children={(field) => (
                      <div className="space-y-2">
                        <Label htmlFor="excerpt">Excerpt *</Label>
                        <Textarea
                          id="excerpt"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Write a compelling excerpt that summarizes your post..."
                          className="min-h-[80px]"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{field.state.value.length}/300 characters</span>
                          <span>This will appear in search results and social shares</span>
                        </div>
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500">{field.state.meta.errors[0]}</p>
                        )}
                      </div>
                    )}
                  />

                  {/* Content Editor */}
                  <form.Field
                    name="content"
                    validators={{
                      onChange: ({ value }) =>
                        !value ? "Content is required" : value.length < 100 ? "Content must be at least 100 characters" : undefined,
                    }}
                    children={(field) => (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="content">Content *</Label>
                          <div className="flex items-center space-x-2">
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => setPreviewMode(!previewMode)}
                            >
                              {previewMode ? <Eye className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              {previewMode ? "Edit" : "Preview"}
                            </Button>
                          </div>
                        </div>
                        <RichTextEditor
                          value={field.state.value}
                          onChange={field.handleChange}
                          placeholder="Write your blog post content here..."
                          minHeight="500px"
                        />
                        <p className="text-sm text-gray-500">
                          Use the toolbar above to format your content. Supports Markdown syntax.
                        </p>
                        {field.state.meta.errors.length > 0 && (
                          <p className="text-sm text-red-500">{field.state.meta.errors[0]}</p>
                        )}
                      </div>
                    )}
                  />

                  {/* Category and Tags */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <form.Field
                      name="category"
                      validators={{
                        onChange: ({ value }) => (!value ? "Category is required" : undefined),
                      }}
                      children={(field) => (
                        <div className="space-y-2">
                          <Label htmlFor="category">Category *</Label>
                          <Select onValueChange={field.handleChange} value={field.state.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category.value} value={category.value}>
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {field.state.meta.errors.length > 0 && (
                            <p className="text-sm text-red-500">{field.state.meta.errors[0]}</p>
                          )}
                        </div>
                      )}
                    />

                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {form.state.values.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                            {tag}
                            <X
                              className="h-3 w-3 cursor-pointer hover:text-red-500"
                              onClick={() => removeTag(tag)}
                            />
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          id="tags"
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyDown={handleTagInputKeyDown}
                          placeholder="Add tags (press Enter to add)..."
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => addTag(tagInput)}
                          disabled={!tagInput.trim()}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="media" className="space-y-6 mt-0">
                  {/* Image Upload */}
                  <ImageUpload
                    onImageSelect={handleImageSelect}
                    onImageRemove={handleImageRemove}
                    currentImage={form.state.values.image}
                    loading={false}
                    error={imageError}
                  />

                  {/* Image Alt Text */}
                  {form.state.values.image && (
                    <form.Field
                      name="imageAlt"
                      children={(field) => (
                        <div className="space-y-2">
                          <Label htmlFor="imageAlt">Image Alt Text</Label>
                          <Input
                            id="imageAlt"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="Describe the image for accessibility..."
                          />
                          <p className="text-sm text-gray-500">
                            This helps screen readers and improves SEO.
                          </p>
                        </div>
                      )}
                    />
                  )}
                </TabsContent>

                <TabsContent value="settings" className="space-y-6 mt-0">
                  {/* Read Time */}
                  <form.Field
                    name="readTime"
                    children={(field) => (
                      <div className="space-y-2">
                        <Label htmlFor="readTime">Read Time</Label>
                        <Input
                          id="readTime"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="e.g., 5 min"
                        />
                        <p className="text-sm text-gray-500">
                          Auto-calculated based on content. You can override it here.
                        </p>
                      </div>
                    )}
                  />

                  {/* Publishing Options */}
                  <div className="space-y-4">
                    <form.Field
                      name="featured"
                      children={(field) => (
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="featured"
                            checked={field.state.value}
                            onCheckedChange={field.handleChange}
                          />
                          <Label htmlFor="featured">Featured Post</Label>
                        </div>
                      )}
                    />

                    <form.Field
                      name="published"
                      children={(field) => (
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="published"
                            checked={field.state.value}
                            onCheckedChange={field.handleChange}
                          />
                          <Label htmlFor="published">Publish Immediately</Label>
                        </div>
                      )}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="seo" className="space-y-6 mt-0">
                  {/* SEO Title */}
                  <form.Field
                    name="seoTitle"
                    children={(field) => (
                      <div className="space-y-2">
                        <Label htmlFor="seoTitle">SEO Title</Label>
                        <Input
                          id="seoTitle"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Optimized title for search engines..."
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{field.state.value.length}/60 characters</span>
                          <span>Recommended: 50-60 characters</span>
                        </div>
                      </div>
                    )}
                  />

                  {/* SEO Description */}
                  <form.Field
                    name="seoDescription"
                    children={(field) => (
                      <div className="space-y-2">
                        <Label htmlFor="seoDescription">SEO Description</Label>
                        <Textarea
                          id="seoDescription"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Meta description for search engines..."
                          className="min-h-[80px]"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{field.state.value.length}/160 characters</span>
                          <span>Recommended: 150-160 characters</span>
                        </div>
                      </div>
                    )}
                  />
                </TabsContent>
              </form>
            </div>
          </Tabs>
        </div>

        <DialogFooter className="flex-shrink-0">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              form.setFieldValue("published", false);
              form.handleSubmit();
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </>
            )}
          </Button>
          <Button
            type="button"
            onClick={() => {
              form.setFieldValue("published", true);
              form.handleSubmit();
            }}
            disabled={isSubmitting}
            className="bg-red-600 hover:bg-red-700"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Publishing...
              </>
            ) : (
              "Publish Post"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}