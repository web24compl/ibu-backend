/**
 * industry-category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::industry-category.industry-category', {
    async find(ctx) {
        return await strapi.db.query("api::industry-category.industry-category").findOne({
            where: {
                publishedAt: {
                    $ne: null,
                },
                url: {
                    $eq: ctx.query.filters['url']['$eq'],
                }
            },
            populate: {
                name: true,
                url: true,
                linksWithImage: {
                    populate: {
                        image: true,
                        links: {
                            populate: {
                                title: true,
                                content: true,
                                url: true,
                            }
                        }
                    }
                },
                title: true,
                references: {
                    populate: {
                        background: true,
                        logo: true,
                    }
                }
            }
        })
    }
});
