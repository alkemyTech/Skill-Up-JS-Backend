exports.image = {
    mimetype: {
        isIn: {
            options: [['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif']],
            errorMessage: 'Image should be a image type like PNG, JPG, SVG or WEBP'
        },
    }
};