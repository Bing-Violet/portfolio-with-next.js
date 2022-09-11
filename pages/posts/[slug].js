import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {marked} from "marked";
import Link from "next/link";
import Image from "next/image";

import hljs from "highlight.js";
import prismjs from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import postStyles from "/styles/components/post.module.scss";
import pagePostStyles from "/styles/pages/posts/post.module.scss";
import React, { useEffect, useState } from "react";  
import ReactMarkdown from 'react-markdown'

console.log(ReactMarkdown)
const MARKDOWN_TEXT = `React + marked + prism.js

**Code Sample:**
\`\`\`javascript
import marked from "marked";
import prismjs from "prismjs";

marked.setOptions({
  renderer,
  highlight: function(code, lang) {
    try {
      return prismjs.highlight(code, prismjs.languages[lang], lang);
    } catch {
      return code;
    }
  }
});
\`\`\`
`;






export default function PostPage({
  frontmatter: { title, tags, date, cover_image },
  slug,
  content,
}) {
  const goBack = "< GoBack";
  const [isMounted, setMount] = useState(false)

  useEffect( () => {
    setMount(true)
  },[]) 
  const renderer = new marked.Renderer();
  renderer.code = function(code, lang, escaped) {
    code = this.options.highlight(code, lang);
    if (!lang) {
      return `<pre><code>${code}</code></pre>`;
    }

    var langClass = "language-" + lang;
    return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
  };

  marked.setOptions({
    renderer,
    highlight: function(code, lang) {
      try {
        return prismjs.highlight(code, prismjs.languages[lang], lang);
      } catch {
        return code;
      }
    }
  });

  return (
    // <div>
      <div className={pagePostStyles.postWrapper}>
        <h1 className={pagePostStyles.title}>{title}</h1>
        <div className={postStyles.dateWrapper}>
          <div>Posted on {date}</div>
        </div>
        <div className={pagePostStyles.tagContainer}>
          <div className={pagePostStyles.tagWrapper}>
            {tags.map((tag, index) => {
              return (
                  <div key={index}>{tag}</div>
              )
            })}
          </div>
        </div>
        <div className={pagePostStyles.imgWrapper}>
          <Image 
            src={cover_image} 
            alt="image" 
            width={"600px"}
            height={"300px"}
            // layout="fill" 
             />
        </div>
        { isMounted ? (
          <div className="post-body">
            <a dangerouslySetInnerHTML={{ __html: marked(content) }}></a>
            <Text/>
          </div>
        ) : null}
      </div>
    // </div>
  );
}
class Text extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html: marked(MARKDOWN_TEXT) }} />;
  }
}


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
