const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`[**INFORMATIONS ROLES**](https://google.fr)
        
        <@&857912898915401728>  C'est le roles qui est attribué à qui rejoint le serveur.
        <@&859412376636620848>  3 invitations = ce role et vous debloquerais la catégorie "Réseaux sociaux"
        <@&859412512654360576>  5 invitations = ce role et vous debloquerais la catégorie "pubs discord" & la catégorie "pub non catégorisé"
        <@&859412704388972554>  10 invitations = vous obtiendrais ce role et debloquerais la catégérie r"echerches & services"
        <@&857915892016873494>  15 invitations  = vous obtiendrais ce role, debloquerais la catégorie "pub non catégorisé" et la catégorie "pam & premium"  et aurais ces avantage:
        -Un role haut placez
        -le temps dattente pour faire vos pub raccourcie partout
        -Une immunitée qui vous permettra d'envoyer des images dans le chat
        <@&857916276739538955>  Role attribué aux personne partenaires chez nous
        <@&857912978375311380><@&857912935853850674>
        L'equipe du staff assure la securité et le bon deroulement du serveur, se role n'est attribué qu'aux personne de confiance, il n'est donc pas possible de remplir ou postulé pour se role, mais si en étant actif et en respectant les règles et créer une relations de confiance avec nous , nous pourrons certainement vous proposer d'etre staff`)
        .setFooter('©・Publicité FR'))
    },
    name: 'embed1'
}