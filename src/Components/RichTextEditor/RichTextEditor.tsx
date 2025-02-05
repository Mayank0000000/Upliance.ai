import React, { useState, useRef, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';

const RichTextEditor: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>('');
  const editorRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  const handleEditorChange = () => {
    if (editorRef.current) {
      setEditorContent(editorRef.current.innerHTML);
      localStorage.setItem('editorContent', editorRef.current.innerHTML); 
    }
  };

  const applyFormatting = (command: string) => {
    document.execCommand(command, false, '');
    handleEditorChange();
  };


  const applyList = (listType: string) => {
    document.execCommand(listType, false, '');
    handleEditorChange();
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2, direction: 'ltr' }}>
      <Typography variant="h6" gutterBottom>
        Rich Text Editor
      </Typography>
      
    
      <Box sx={{ marginBottom: 2 }}>
        <Button onClick={() => applyFormatting('bold')}>Bold</Button>
        <Button onClick={() => applyFormatting('italic')}>Italic</Button>
        <Button onClick={() => applyFormatting('underline')}>Underline</Button>
        <Button onClick={() => applyList('insertOrderedList')}>Ordered List</Button>
        <Button onClick={() => applyList('insertUnorderedList')}>Unordered List</Button>
      </Box>

      <div
        ref={editorRef}
        contentEditable
        dangerouslySetInnerHTML={{ __html: editorContent }}
        onInput={handleEditorChange}
        style={{
          minHeight: 300,
          maxWidth: 300,
          width: 300,
          border: '1px solid #ccc',
          borderRadius: 4,
          padding: '10px',
          outline: 'none',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          direction: 'ltr',
        }}
      ></div>
    </Box>
  );
};

export default RichTextEditor;
