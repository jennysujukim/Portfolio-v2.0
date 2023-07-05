// eslint-disable-next-line
import Prism from 'prismjs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-sass';

export default function CodeSnippet({ code, language }) {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
  );
}