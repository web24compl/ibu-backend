/**
 * menu controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::menu.menu', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.db.query('api::menu.menu').findMany({
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
}}));
