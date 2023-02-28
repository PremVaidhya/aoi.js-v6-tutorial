module.exports = {
   name: "avatar",
   type: "interaction",
   prototype: "slash",
   code: `
$interactionReply[;{newEmbed:{title:$username[$mentioned[1;yes]]'s Avatar}{image:$userAvatar[$mentioned[1;yes]]}{color:FF0000}{footer:Requested By $username:$userAvatar}{timestamp}}]`
}
