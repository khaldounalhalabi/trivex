const selectors = `.tiptap-content-viewer {
blockquote {
        border-left: 3px solid var(--primary);
        margin: 1.5rem 0;
        padding-left: 1rem;
    }


    /* Code and preformatted text styles */

    code {
        background-color: var(--secondary);
        border-radius: 0.4rem;
        color: var(--primary);
        font-size: 0.85rem;
        padding: 0.25em 0.3em;
    }

    /* Link styles */

    a {
        color: var(--color-blue-300);
        cursor: pointer;
        text-underline: var(--color-blue-300);
        text-underline-mode: auto;

        &:hover {
            color: var(--color-blue-500);
        }
    }

    /* Image styles */

    img {
        display: block;
        height: auto;
        margin: 1.5rem 0;
        max-width: 100%;

        &.ProseMirror-selectednode {
            outline: 3px solid var(--primary);
        }
    }

    /* List styles */

    ul,
    ol {
        padding: 0 1rem;
        margin: 1.25rem 1rem 1.25rem 0.4rem;

        li p {
            margin-top: 0.25em;
            margin-bottom: 0.25em;
        }
    }

    ul {
        list-style-type: circle;
    }

    ol {
        list-style-type: decimal;
    }


    /* Heading styles */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.1;
        margin-top: 2.5rem;
        text-wrap: pretty;
    }

    h1,
    h2 {
        margin-top: 3.5rem;
        margin-bottom: 1.5rem;
    }

    h1 {
        font-size: 1.4rem;
    }

    h2 {
        font-size: 1.2rem;
    }

    h3 {
        font-size: 1.1rem;
    }

    h4,
    h5,
    h6 {
        font-size: 1rem;
    }

    /** Horizontal rule */

    hr {
        border: none;
        border-top: 1px solid var(--secondary);
        cursor: pointer;
        margin: 2rem 0;

        &.ProseMirror-selectednode {
            border-top: 1px solid var(--primary);
        }
    }

    /* Table-specific styling */

    table {
        border-collapse: collapse;
        margin: 0;
        overflow: hidden;
        table-layout: fixed;
        width: 100%;

        td,
        th {
            border: 1px solid var(--foreground);
            box-sizing: border-box;
            min-width: 1em;
            padding: 6px 8px;
            position: relative;
            vertical-align: top;

            > * {
                margin-bottom: 0;
            }
        }

        th {
            background-color: var(--secondary);
            font-weight: bold;
            text-align: left;
        }

        .selectedCell:after {
            background: var(--secondary);
            content: "";
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            pointer-events: none;
            position: absolute;
            z-index: 2;
        }

        .column-resize-handle {
            background-color: var(--secondary);
            bottom: -2px;
            pointer-events: none;
            position: absolute;
            right: -2px;
            top: 0;
            width: 4px;
        }
    }

    .tableWrapper {
        margin: 1.5rem 0;
        overflow-x: auto;
    }

    &.resize-cursor {
        cursor: ew-resize;
        cursor: col-resize;
    }

    /* Youtube embed */
    div[data-youtube-video] {
        cursor: move;
        padding-right: 1.5rem;

        iframe {
            border: 0.5rem solid var(--secondary);
            display: block;
            min-height: 200px;
            min-width: 200px;
            outline: 0px solid transparent;
        }

        &.ProseMirror-selectednode iframe {
            outline: 3px solid var(--secondary);
            transition: outline 0.15s;
        }
    }
}`;

export default function WrapContent(html: string) {
    const stylTag = `<style>${selectors}</style>`;
    return `<div class="tiptap-content-viewer">${stylTag}${html}</div>`;
}
