
module.exports = async (client, message) => {
    
   
   
    if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;


    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    const cmd = client.commands.get(command);

    if (!cmd) return //returns if command doesn't exist

    //NEED TO ADD PROPER USER LEVEL SYSTEM
    
    //owner bypass
    if (message.author.id == client.config.ownerID){
            cmd.run(client, message, args);
            return;
    }
            //if user calling command doesn't have bot owner level permission cancel command 

    if (cmd.config.permLevel == "owner" && message.author.id != client.config.ownerID) return;
    let requiredPerm = cmd.config.permLevel

    //if user isn't admin when needed cancel command
    if (requiredPerm == "admin" && !(message.member.hasPermission("ADMINISTRATOR"))) return;


    try{
       cmd.run(client, message, args);
      
       
      
    } catch (err) {
        console.log("unhandled error")
        console.log(err)
            //handles any unhandled errors with commands
    }
}