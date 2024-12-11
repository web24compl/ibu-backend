/**
 *  global controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::global.global', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.db.query("api::global.global").findMany({
            where: {
                publishedAt: {
                    $ne: null,
                },
            },
            populate: {
                global: true,
            },
        });
    },
}));
