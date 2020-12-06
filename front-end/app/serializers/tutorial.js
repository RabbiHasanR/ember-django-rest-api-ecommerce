import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    serialize: function(snapshot/*, options*/)
    {
        let json = this._super(...arguments);
        // console.log('serializer:',snapshot._attributes.thumbnailImage)
        // console.log('difficulties:', snapshot.record.difficulties)
        json.data.type = Ember.String.capitalize(snapshot.modelName);
        json.data.id = snapshot.id;
        json.data.attributes = snapshot._attributes;
        json.data.attributes = {
            title:snapshot._attributes.title,
            video_url:snapshot._attributes.video_url,
            description:snapshot._attributes.description,
            transcript:snapshot._attributes.transcript,
            publish_date:snapshot._attributes.publishDate,
            thumbnail_image:snapshot._attributes.thumbnailImage,
            permalink:snapshot._attributes.permalink,
            free:snapshot._attributes.free,
            difficulty:snapshot._attributes.difficulty,
            difficulties: snapshot.record.difficulties
        };
        console.log('json:', json);
        return json
    }
});
