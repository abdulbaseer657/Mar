const Joi = require(`@hapi/joi`);

const jobsSchema = Joi.object({
  job_title: Joi.string().required(),
  description: Joi.string().required(),
  job_url: Joi.string().required(),
  company: Joi.string().required(),
});

module.exports = {
  jobsSchema,
};
