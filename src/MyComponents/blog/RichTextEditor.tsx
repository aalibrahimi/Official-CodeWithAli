// src/components/RichTextEditor.tsx
"use client";
import React, { useState, useRef } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Link, 
  Image as ImageIcon, 
  Code, 
  Quote,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  Eye,
  Edit3
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export function RichTextEditor({ 
  value, 
  onChange, 
  placeholder = "Start writing your blog post...",
  minHeight = "400px" 
}: RichTextEditorProps) {
  const [isPreview, setIsPreview] = useState(false);
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const insertAtCursor = (before: string, after: string = '', placeholder: string = '') => {
    const editor = editorRef.current;
    if (!editor) return;

    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = selectedText || placeholder;
    
    const beforeCursor = value.substring(0, start);
    const afterCursor = value.substring(end);
    
    const newValue = beforeCursor + before + newText + after + afterCursor;
    onChange(newValue);
    
    // Set cursor position after insertion
    setTimeout(() => {
      if (selectedText) {
        editor.setSelectionRange(start + before.length, start + before.length + newText.length);
      } else {
        editor.setSelectionRange(start + before.length, start + before.length + placeholder.length);
      }
      editor.focus();
    }, 0);
  };

  const formatText = (format: string) => {
    switch (format) {
      case 'bold':
        insertAtCursor('**', '**', 'bold text');
        break;
      case 'italic':
        insertAtCursor('*', '*', 'italic text');
        break;
      case 'underline':
        insertAtCursor('<u>', '</u>', 'underlined text');
        break;
      case 'code':
        insertAtCursor('`', '`', 'code');
        break;
      case 'h1':
        insertAtCursor('\n# ', '\n', 'Heading 1');
        break;
      case 'h2':
        insertAtCursor('\n## ', '\n', 'Heading 2');
        break;
      case 'h3':
        insertAtCursor('\n### ', '\n', 'Heading 3');
        break;
      case 'ul':
        insertAtCursor('\n- ', '\n', 'List item');
        break;
      case 'ol':
        insertAtCursor('\n1. ', '\n', 'List item');
        break;
      case 'quote':
        insertAtCursor('\n> ', '\n', 'Quote text');
        break;
      case 'hr':
        insertAtCursor('\n---\n', '');
        break;
    }
  };

  const insertLink = () => {
    if (linkUrl && linkText) {
      insertAtCursor(`[${linkText}](${linkUrl})`, '');
      setLinkUrl('');
      setLinkText('');
      setLinkDialogOpen(false);
    }
  };

  const insertImage = () => {
    if (imageUrl) {
      const altText = imageAlt || 'Image';
      insertAtCursor(`![${altText}](${imageUrl})`, '');
      setImageUrl('');
      setImageAlt('');
      setImageDialogOpen(false);
    }
  };

  const renderPreview = (content: string) => {
    // Simple markdown to HTML conversion (you might want to use a proper markdown library like marked or react-markdown)
    return content
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/<u>(.*?)<\/u>/gim, '<u>$1</u>')
      .replace(/`(.*?)`/gim, '<code>$1</code>')
      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" class="max-w-full h-auto rounded-lg" />')
      .replace(/^---$/gim, '<hr>')
      .replace(/\n/gim, '<br>');
  };

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="border-b border-gray-200 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center flex-wrap gap-1">
          {/* Text Formatting */}
          <div className="flex items-center gap-1 mr-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => formatText('bold')}
              title="Bold"
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => formatText('italic')}
              title="Italic"
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => formatText('underline')}
              title="Underline"
            >
              <Underline className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => formatText('code')}
              title="Inline Code"
            >
              <Code className="h-4 w-4" />
            </Button>
          </div>

          {/* Headings */}
          <div className="flex items-center gap-1 mr-2 border-l pl-2 border-gray-300 dark:border-gray-600">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => formatText('h1')}
              title="Heading 1"
            >
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => formatText('h2')}
              title="Heading 2"
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => formatText('h3')}
              title="Heading 3"
            >
              <Heading3 className="h-4 w-4" />
            </Button>
          </div>

          {/* Lists */}
          <div className="flex items-center gap-1 mr-2 border-l pl-2 border-gray-300 dark:border-gray-600">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => formatText('ul')}
              title="Bullet List"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => formatText('ol')}
              title="Numbered List"
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => formatText('quote')}
              title="Quote"
            >
              <Quote className="h-4 w-4" />
            </Button>
          </div>

          {/* Media */}
          <div className="flex items-center gap-1 mr-2 border-l pl-2 border-gray-300 dark:border-gray-600">
            <Dialog open={linkDialogOpen} onOpenChange={setLinkDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  title="Insert Link"
                >
                  <Link className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Insert Link</DialogTitle>
                  <DialogDescription>
                    Add a link to your content
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="linkText">Link Text</Label>
                    <Input
                      id="linkText"
                      value={linkText}
                      onChange={(e) => setLinkText(e.target.value)}
                      placeholder="Enter link text"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkUrl">URL</Label>
                    <Input
                      id="linkUrl"
                      value={linkUrl}
                      onChange={(e) => setLinkUrl(e.target.value)}
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setLinkDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="button" onClick={insertLink}>
                    Insert Link
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  title="Insert Image"
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Insert Image</DialogTitle>
                  <DialogDescription>
                    Add an image to your content
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                      id="imageUrl"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="imageAlt">Alt Text</Label>
                    <Input
                      id="imageAlt"
                      value={imageAlt}
                      onChange={(e) => setImageAlt(e.target.value)}
                      placeholder="Description of the image"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setImageDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="button" onClick={insertImage}>
                    Insert Image
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Preview Toggle */}
          <div className="flex items-center gap-1 ml-auto border-l pl-2 border-gray-300 dark:border-gray-600">
            <Button
              type="button"
              variant={isPreview ? "default" : "ghost"}
              size="sm"
              onClick={() => setIsPreview(!isPreview)}
              title="Toggle Preview"
            >
              {isPreview ? <Edit3 className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {isPreview ? "Edit" : "Preview"}
            </Button>
          </div>
        </div>
      </div>

      {/* Editor/Preview Area */}
      <div style={{ minHeight }}>
        {isPreview ? (
          <div 
            className="p-4 prose prose-gray dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: renderPreview(value) }}
          />
        ) : (
          <textarea
            ref={editorRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-full p-4 resize-none border-none outline-none bg-transparent text-gray-900 dark:text-white font-mono text-sm leading-relaxed"
            style={{ minHeight }}
          />
        )}
      </div>

      {/* Status Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2 bg-gray-50 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span>{value.length} characters</span>
          <span>{value.trim().split(/\s+/).filter(word => word.length > 0).length} words</span>
          <span>~{Math.ceil(value.trim().split(/\s+/).filter(word => word.length > 0).length / 200)} min read</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs">
            {isPreview ? "Preview Mode" : "Edit Mode"}
          </span>
        </div>
      </div>
    </div>
  );
}