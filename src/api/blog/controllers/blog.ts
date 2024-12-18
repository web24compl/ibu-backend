/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.db.query("api::blog.blog").findOne({
            populate: {
                title: true,
            }
        })
    }
}));
