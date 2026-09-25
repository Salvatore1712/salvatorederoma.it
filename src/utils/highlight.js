// Evidenziazione sintassi minima (commenti, stringhe, tag, keyword, proprietà CSS) → HTML
function escape(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function highlight(src) {
  const re = /(<!--[\s\S]*?-->|\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("[^"\n]*"|'[^'\n]*')|(<\/?[a-z][\w-]*|\/?>)|\b(const|let|function|return|if|else|for|of|new|true|false|import|export|from|default)\b|([a-z-]+)(?=:[^:\n;{]+;)/gi
  let out = ''
  let last = 0
  let m
  while ((m = re.exec(src))) {
    out += escape(src.slice(last, m.index))
    const cls = m[1] ? 'com' : m[2] ? 'str' : m[3] ? 'tag' : m[4] ? 'kw' : 'prop'
    out += '<span class="tk-' + cls + '">' + escape(m[0]) + '</span>'
    last = re.lastIndex
  }
  return out + escape(src.slice(last))
}
