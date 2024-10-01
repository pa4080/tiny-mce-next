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

  const onLoad = () => {
    console.log("Editor loaded!");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Editor
          id="tiny-mce-editor"
          tinymceScriptSrc={process.env.NEXT_PUBLIC_Tiny_Mce_Path}
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            init_instance_callback: onLoad,
            height: 500,
            licenseKey: "gpl",
            menubar: false,
            table_grid: false,
            visual: false,
            table_resize_bars: false,
            table_advtab: false,
            table_row_advtab: false,
            table_cell_advtab: false,
            object_resizing: false,
            elementpath: false,
            statusbar: false,
            branding: false,
            toolbar_sticky: true,
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
              "undo redo | bold italic underline | fontselect fontsizeselect formatselect | alignleft aligncenter alignright | numlist bullist | forecolor backcolor | link anchor | media | removeformat help",
            paste_as_text: false,
            paste_block_drop: true,
            paste_data_images: true,
            paste_merge_formats: false,
            paste_remove_styles_if_webkit: false,
            paste_tab_spaces: 2,
            paste_webkit_styles: "",
            noneditable_class: "non-editable",
            editable_class: "editable",
            allow_html_in_named_anchor: true,
            content_style: "body { font-size:16px }",
          }}
        />
        <Button onClick={log}>Log editor content</Button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        ...
      </footer>
    </div>
  );
}
