const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function GetRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

const yaoiLabel = document.getElementById('yaoiLabel')
const yaoiIdeas = [
    'Enimies to lovers',
    'Rivals to lovers',
    'Friends to lovers',
    'Childhood friends',
    'Strangers to lovers',
    'Fake dating',
    'Forced proximity',
    'Opposites attract',
    'Grumpy x sunshine',
    'Slow burn',
    'Love at first sight',
    'Second-chance romance',
    'Mutual pining',
    'Secret relationship',
    'Forbidden love',
    'Introvert × extrovert',
    'Shy × confident',
    'Stoic × affectionate',
    'Protective × independent',
    'Gentle giant × tiny menace',
    'Two emotionally awkward idiots',
    'Clingy × secretly clingier',
    'Both think the other is straight',
    'Reincarnated lovers',
    'Soulmate marks',
    'Supernatural roommates',
    'Villain × hero',
    'Idol × bodyguard',
    'Athlete × team manager',
    'Barista × regular customer',
    'Online friends meeting in person',
    'Famous author × anonymous fan',
    'Childhood friends reunited as adults'
]
document.getElementById('yaoiButton').addEventListener('click', async function() {
    for (let i = 0; i < 5; i++) {
        yaoiLabel.textContent = GetRandom(yaoiIdeas);
        await wait(100);
    }
})

const yuriLabel = document.getElementById('yuriLabel')
const yuriIdeas = [
    'Best friends to lovers',
    'Rivals to lovers',
    'Childhood friends',
    'Strangers to lovers',
    'Fake dating',
    'Forced proximity',
    'Opposites attract',
    'Grumpy × sunshine',
    'Slow burn',
    'Mutual pining',
    'Secret relationship',
    'Forbidden love',
    'Second-chance romance',
    'Love at first sight',
    'One falls first, the other falls harder',
    'Shy × outgoing',
    'Stoic × affectionate',
    'Popular × loner',
    'Flirt × easily flustered',
    'Princess × tomboy',
    'Perfectionist × free spirit',
    'Introvert × social butterfly',
    'Protective × independent',
    'Teasing × secretly sensitive',
    'Two awkward hopeless romantics',
    'Childhood besties with unresolved feelings',
    'Rival perfectionists',
    'Both believe their crush is unrequited',
    'Angel × demon',
    'Reincarnated lovers',
    'Soulmate marks',
    'Goddess × mortal',
    'Heroine × villainess',
    'Rival kingdom heirs',
    'Idol × bodyguard',
    'Actress × director',
    'Florist × regular customer',
    'Online friends meeting in person',
    'Childhood friends reunited'
]
document.getElementById('yuriButton').addEventListener('click', async function() {
    for (let i = 0; i < 5; i++) {
        yuriLabel.textContent = GetRandom(yuriIdeas);
        await wait(100);
    }
})

const storyLabel = document.getElementById('storyLabel')
const storyIdeas = [
    'Sharing an umbrella in the rain',
    'Falling asleep on each others shoulder',
    'Cooking dinner together for the first time',
    'Getting caught staring at each other',
    'Accidentally wearing matching outfits',
    'One steals the others hoodie',
    'One falls asleep during a movie',
    'An accidental confession',
    'A first kiss after months of pining',
    'Planning a surprise date',
    'Writing secret love letters',
    'Recreating their first date',
    'One asks to hold hands',
    'A surprise birthday celebration',
    'Making a playlist for their crush',
    'Comforting someone after a bad day',
    'Taking care of a sick partner',
    'Reassurance after an insecurity',
    'A nightmare interrupted by a hug',
    'One helps the other through a stressful day',
    'Quiet companionship without talking',
    'A comforting hug after a misunderstanding',
    'Staying up together during a storm',
    'One learns how the other likes to be comforted',
    'Falling asleep while cuddling',
    'A disastrous attempt at baking',
    'A pet chooses one partner as its favorite',
    'One attempts to flirt and completely fails',
    'A surprise party nearly gets exposed',
    'Accidentally sending a romantic text to the group chat',
    'Trying to take a cute couple photo',
    'One gets jealous of a stuffed animal',
    'A winter festival date',
    'Picking pumpkins together',
    'A beach trip at sunset',
    'Decorating their first apartment',
    'A New Years midnight kiss',
    'A Valentines Day surprise',
    'Watching fireworks together',
    'Getting snowed in at a cabin',
    'Visiting a flower garden in spring',
    'Celebrating their first anniversary'
]
document.getElementById('storyButton').addEventListener('click', async function() {
    for (let i = 0; i < 5; i++) {
        storyLabel.textContent = GetRandom(storyIdeas);
        await wait(100);
    }
})