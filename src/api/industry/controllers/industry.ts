/**
 * industry controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::industry.industry', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.db.query('api::industry.industry').findOne({
            where: {
                publishedAt: {
                    $ne: null,
                },
            },
            populate: {
                title: true,
                linksWithImage: {
                    populate: {
                        image: true,
                        title: true,
                        links: {
                            populate: {
                                title: true,
                                content: true,
                                url: true,
                            }
                        }
                    },
                },
                textWithImage: {
                    populate: {
                        title: true,
                        content: true,
                        image: true,
                    },
                },
                contactForm: {
                    populate: {
                        title: true,
                        content: true,
                        rodo: true,
                        person: {
                            populate: {
                                image: true,
                                name: true,
                                position: true,
                                phone: true,
                                email: true,
                            },
                        },
                    },
                }
            },
        });
    },
}));