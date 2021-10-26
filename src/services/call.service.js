const { CommunicationIdentityClient } = require('@azure/communication-identity');

class CallService {
    async getCall(req) {
        const teamsURL = req.query.callurl;
        
        const connectionString = process.env.ACS_CTX_STRING;

        // Instantiate the identity client
        const identityClient = new CommunicationIdentityClient(connectionString);

        let identityResponse = await identityClient.createUser();

        // Issue an access token with the "voip" scope for an identity
        let tokenResponse = await identityClient.getToken(identityResponse, ["voip"]);
        const { token, expiresOn } = tokenResponse;

        return {
            teamsURL: teamsURL,
            acsToken: token
        };
    }
}

module.exports = CallService;