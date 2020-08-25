function (user, context, callback) {
    let ageRange = user.age_range || undefined;
    
    if (!ageRange) {
      const _ = require('lodash');
      const facebookIdentity = _.find(user.identities, { connection: 'facebook' });
  
      if (facebookIdentity) {
       ageRange = facebookIdentity.age_range; 
      }
    }
    
    context.idToken['https://cruise0.com/analytics'] = {
      age_range: ageRange || 'Unknown!',
    };
    
    return callback(null, user, context);
  }