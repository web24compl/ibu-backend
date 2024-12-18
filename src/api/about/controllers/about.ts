/**
 *  about controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::about.about', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.db.query("api::about.about").findOne({
            populate: {
                title: true,
                textWithImage: {
                    populate: {
                        title: true,
                        content: true,
                        image: true,
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
                team: {
                    populate: {
                        title: true,
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
                },
                team_2: {
                    populate: {
                        title: true,
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
                },
                team_3: {
                    populate: {
                        title: true,
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
                },
                certificates: {
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
                }
            }
        })
    }
}));
