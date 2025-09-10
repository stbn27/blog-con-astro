import type { APIRoute } from "astro";
import rss from '@astrojs/rss';
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ params, request, site }) => {

    const blogPost = await getCollection("blog");

    return rss({

        // stylesheet: 'src/styles/rss.xsl',

        // `<title>` campo en el xml generado
        title: 'Esteban blog',
        // `<description>` campo en el xml generado
        description: 'Aprendiendo astro y compartiendo',
        // Usa el "site" desde el contexto del endpoint
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: site ?? '',
        // Array de `<item>`s en el xml generado
        // Consulta la sección "Generando `items`" para ejemplos utilizando colecciones de contenido y glob imports
        items: blogPost.map(({ data, slug }) => ({
            title: data.title,
            pubDate: data.date,
            description: data.description,
            link: `/blog/${slug}`
        })),
        // (opcional) inyecta xml personalizado
        customData: `<language>es-mx</language>`,
    });

};