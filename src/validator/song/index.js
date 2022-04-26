const InvariantError = require('../../exception/invariantError');
const SongSchema = require('./schema');

const SongValidator = {
  validateSongPayload: (payload) => {
    const validationResult = SongSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },

};

module.exports = SongValidator;
