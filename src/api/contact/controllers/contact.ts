/**
 * contact controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::contact.contact', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.db.query('api::contact.contact').findOne({
            populate: {
                title: true,
                mapUrl: true,
                form: {
                    populate: {
                        title: true,
                        company: true,
                        address: true,
                        phone: true,
                        mail: true,
                        companyData: true,
                        subtitle: true,
                        rodo: true
                    }
                }
            }
        });
    }
}));
