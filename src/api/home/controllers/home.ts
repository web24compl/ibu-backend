/**
 * home controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::home.home', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.db.query("api::home.home").findOne({
            populate: {
                HomeBanner: {
                    populate: {
                        title: true,
                        button_text: true,
                        button_url: true,
                    }
                },
                numbers: {
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
                branches: {
                    populate: {
                        title: true,
                        branches: {
                            populate: {
                                name: true,
                                description: true,
                                url: true,
                            }
                        }
                    }
                },
                howWeWork: {
                    populate: {
                        title: true,
                        subtitle: true,
                        content: true,
                        subtitle2: true,
                        content2: true,
                        subtitle3: true,
                        content3: true,
                    }
                },
                cases: {
                    populate: {
                        title: true,
                        text: true,
                        cases: {
                            populate: {
                                logo: true,
                                background: true,
                                description: true,
                                url: true,
                            }
                        }
                    }
                },
                contact: {
                    populate: {
                        title: true,
                        subtitle: true,
                        rodo: true,
                        person: {
                            populate: {
                                image: true,
                                name: true,
                                position: true,
                                phone: true,
                                email: true,
                            }
                        }
                    }
                }
            }
        })
    }
}));
