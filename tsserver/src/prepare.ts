import { agencyv1, AgentClient } from '@findy-network/findy-common-ts'
import { existsSync, readFileSync, writeFileSync } from 'fs';

export default (agentClient: AgentClient, userName: string): Promise<string> => new Promise(async (resolve) => {
    const createCredDef = async (schemaId: string) => {
        const schemaMsg = new agencyv1.Schema();
        schemaMsg.setId(schemaId)

        try {
            await agentClient.getSchema(schemaMsg)
        } catch {
            setTimeout(createCredDef, 1000, schemaId)
            return
        }
        console.log(`Creating cred def for schema ID ${schemaId}`)
        const msg = new agencyv1.CredDefCreate()
        msg.setSchemaid(schemaId)
        msg.setTag(userName)

        const res = await agentClient.createCredDef(msg)
        console.log(`Cred def created ${res.getId()}`)
        resolve(res.getId())
    }

    //Using a schema for recipient crypto wallet
    //Schema name = "wallet"
    //Attributes = ["walletAddress"]
    const prepareIssuing = async () => {
        const schemaName = "wallet"
        console.log(`Creating schema ${schemaName}`)

        const schemaMsg = new agencyv1.SchemaCreate()
        schemaMsg.setName(schemaName)
        schemaMsg.setVersion("1.0")
        schemaMsg.setAttributesList(["walletAddress"])

        const schemaId = (await agentClient.createSchema(schemaMsg)).getId()
        await createCredDef(schemaId)
    }
    await prepareIssuing()
})