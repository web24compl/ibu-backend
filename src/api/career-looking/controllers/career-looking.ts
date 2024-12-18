/**
 * career-looking controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::career-looking.career-looking', ({ strapi }) => ({

    async find(ctx) {
        return await strapi.db.query("api::career-looking.career-looking").findOne({
            populate: {
                title: true,
                trainingMessage: true,
                points: {
                    populate: {
                        title: true,
                        numbers: {
                            populate: {
                                value: true,
                                label: true,
                            }
                        }
                    }
                },
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
                }
            }
        })
    }
}));

