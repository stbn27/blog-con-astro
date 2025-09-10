import { z as createVNode, J as Fragment, _ as __astro_tag_component__ } from './astro/server_DKbU_Q-f.mjs';
import 'clsx';

const frontmatter = {
  "title": "Explorando Funciones de ES6",
  "date": "2023-06-01T00:00:00.000Z",
  "description": "Explorando algunas de las nuevas funciones de ES6 en JavaScript.",
  "author": "jane-doe",
  "image": "images/post-01.png",
  "tags": ["JavaScript", "ES6", "Programming"],
  "isDraft": false
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "explorando-funciones-de-es6",
    "text": "Explorando Funciones de ES6"
  }, {
    "depth": 2,
    "slug": "arrow-functions---funciones-de-flecha",
    "text": "Arrow Functions - Funciones de Flecha"
  }, {
    "depth": 3,
    "slug": "ejemplo",
    "text": "Ejemplo"
  }, {
    "depth": 2,
    "slug": "template-literals---literales-de-plantilla",
    "text": "Template Literals - Literales de Plantilla"
  }, {
    "depth": 3,
    "slug": "ejemplo-1",
    "text": "Ejemplo"
  }, {
    "depth": 2,
    "slug": "destructuring-assignment---asignación-por-desestructuración",
    "text": "Destructuring Assignment - Asignación por Desestructuración"
  }, {
    "depth": 3,
    "slug": "ejemplo-2",
    "text": "Ejemplo"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "explorando-funciones-de-es6",
      children: frontmatter.title
    }), "\n", createVNode(_components.p, {
      children: "JavaScript ES6 introdujo varias funciones nuevas que han hecho que la codificación en JavaScript sea más eficiente y agradable. Vamos a explorar algunas de estas funciones."
    }), "\n", createVNode(_components.h2, {
      id: "arrow-functions---funciones-de-flecha",
      children: "Arrow Functions - Funciones de Flecha"
    }), "\n", createVNode(_components.p, {
      children: ["Las funciones de flecha proporcionan una nueva sintaxis para escribir expresiones de función. Son más concisas y vinculan léxicamente el valor ", createVNode(_components.code, {
        children: "this"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "ejemplo",
      children: "Ejemplo"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "b"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " b;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Output: 5"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "template-literals---literales-de-plantilla",
      children: "Template Literals - Literales de Plantilla"
    }), "\n", createVNode(_components.p, {
      children: "Los literales de plantilla permiten una interpolación de cadenas más fácil y cadenas de varias líneas. Utilizan comillas invertidas (`) en lugar de comillas simples o dobles."
    }), "\n", createVNode(_components.h3, {
      id: "ejemplo-1",
      children: "Ejemplo"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'Jane'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`Hello, ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}!`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Output: Hello, Jane!"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "destructuring-assignment---asignación-por-desestructuración",
      children: "Destructuring Assignment - Asignación por Desestructuración"
    }), "\n", createVNode(_components.p, {
      children: "La asignación por desestructuración le permite extraer valores de matrices u objetos y asignarlos a variables de una manera más concisa."
    }), "\n", createVNode(_components.h3, {
      id: "ejemplo-2",
      children: "Ejemplo"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " person"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { name: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Jane'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", age: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "30"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " };"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " person;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(name, age); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Output: Jane 30"
          })]
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/post-01.mdx";
const file = "E:/astro-curso/blog-con-astro/src/content/blog/post-01.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/astro-curso/blog-con-astro/src/content/blog/post-01.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
