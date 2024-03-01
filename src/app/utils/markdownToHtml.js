import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkHighlight from 'remark-highlight.js';


export default async function markdownToHtml(markdown) {
  const result = await remark().use(remarkGfm).use(remarkHighlight).use(remarkHtml).process(markdown);
  let htmlContent = result.toString();
  htmlContent = htmlContent
    .replace(/<h1>/g, '<h1 class="text-3xl font-bold mb-4">')
    .replace(/<h2>/g, '<h2 class="text-2xl font-bold mb-4">')
    .replace(/<h3>/g, '<h3 class="text-xl font-bold mb-4">')
    .replace(/<h4>/g, '<h4 class="text-lg font-bold mb-4">')
    .replace(/<h5>/g, '<h5 class="text-base font-bold mb-4">')
    .replace(/<h6>/g, '<h6 class="text-sm font-bold mb-4">')
    .replace(/<p>/g, '<p class="mb-4">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4">')
    .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4">')
    .replace(/<li>/g, '<li class="mb-2">')
    .replace(/<strong>/g, '<strong class="font-bold">')
    .replace(/<em>/g, '<em class="italic">')
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 pl-4 italic text-gray-600">')
    .replace(/<code class="language-(.*?)">/g, '<code class="bg-black text-white max-w-full overflow-auto p-2 rounded $1">') // Apply Tailwind CSS styles for code blocks with language identifier
    .replace(/<pre>/g, '<pre class="bg-black text-white max-w-full overflow-auto p-4 mb-4 rounded">') // Apply Tailwind CSS styles for pre blocks
    .replace(/<a /g, '<a class="text-blue-500 underline" ')
    .replace(/<\/a>/g, '</a>')
    // .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" />'); // Handle image Markdown syntax

  return htmlContent;
}
