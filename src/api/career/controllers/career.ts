/**
 * career controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::career.career', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.db.query("api::career.career").findMany({
            where: {
                publishedAt: {
                    $ne: null,
                },
            },
            populate: {
                name: true,
                slug: true,
                title: true,
                description: {
                    populate: {
                        title: true,
                        content: true,
                    }
                },
                content: true,
            }
        })
    }
}));