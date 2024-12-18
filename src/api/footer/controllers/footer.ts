/**
 * footer controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::footer.footer', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.db.query('api::footer.footer').findMany({
            where: {
                publishedAt: {
                    $ne: null,
                },
            },
            populate: {
                items: {
                    populate: {
                        label: true,
                        link: true,
                        children: {
                            populate: {
                                label: true,
                                link: true,
                            },
                        },
                    },
                },
            },
        });
    },
}));
