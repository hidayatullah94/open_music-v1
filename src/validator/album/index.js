const AlbumSchema = require('./schema');
const InvariantError = require('../../exception/invariantError');

const AlbumValidator = {
  validateAlbumPayload: (payload) => {
    const validationResult = AlbumSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AlbumValidator;
