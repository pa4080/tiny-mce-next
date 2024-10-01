"use client";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef: any = useRef({});
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <>
          <Editor
            id="tiny-mce-editor"
            tinymceScriptSrc="/tinymce/tinymce.min.js"
            licenseKey="gpl"
            onInit={(_evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "preview",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              powerpaste_word_import: "clean", // optional
              powerpaste_html_import: "clean", // optional
              // content_style:
              //   "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <Button onClick={log}>Log editor content</Button>
        </>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        ...
      </footer>
    </div>
  );
}
