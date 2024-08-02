const moodSuggestions = {
    Clear: {
        activities: [
            { activity: 'Go for a walk ', emoji: '‍♂️' },
            { activity: 'Have a picnic ', emoji: '' },
            { activity: 'Play outdoor sports ⚽', emoji: '' },
        ],
        music: 'Sunny vibes playlist ',
        youtubeLink: 'https://youtu.be/4T7HwLGNiuw?si=godS88cNSHI6v49M' // Upbeat and sunny music
    },
    Clouds: {
        activities: [
            { activity: 'Read a book ', emoji: '' },
            { activity: 'Visit a museum ️', emoji: '' },
            { activity: 'Do a puzzle ', emoji: '' },
        ],
        music: 'Chill beats ',
        youtubeLink: 'https://youtu.be/1bvbsx-hpFc?si=k95V6zCa5AN2Md0Z' // Chill music
    },
    Rain: {
        activities: [
            { activity: 'Watch a movie ', emoji: '' },
            { activity: 'Bake cookies ', emoji: '‍' },
            { activity: 'Listen to the rain ️', emoji: '' },
        ],
        music: 'Rainy day tunes ☔',
        youtubeLink: 'https://youtu.be/k7LhdJPUTQ0?si=031Ag7mJDOCuHZrn' // Relaxing rain sounds
    },
    Thunderstorm: {
        activities: [
            { activity: 'Cozy up with a hot drink ☕', emoji: '' },
            { activity: 'Listen to thunderstorm sounds ️', emoji: '' },
            { activity: 'Play board games ', emoji: '' },
        ],
        music: 'Thunderstorm ambient sounds ️',
        youtubeLink: 'https://youtu.be/gVKEM4K8J8A?si=aKTTiTC6cP6G7qBL' // Thunderstorm soundscape
    },
    Snow: {
        activities: [
            { activity: 'Build a snowman ⛄', emoji: '❄️' },
            { activity: 'Have a snowball fight ❄️', emoji: '⚔️' },
            { activity: 'Drink hot chocolate ', emoji: '☕' },
        ],
        music: 'Winter classics ',
        youtubeLink: 'https://youtu.be/zbL4reaM_hY?si=dkrqncUJW3oFxZlO' // Winter classics playlist
    },
    Mist: {
        activities: [
            { activity: 'Take a relaxing bath ', emoji: '' },
            { activity: 'Meditate ‍♀️', emoji: '‍♂️' },
            { activity: 'Do some indoor yoga ‍♂️', emoji: '‍♀️' },
        ],
        music: 'Soft instrumental music ',
        youtubeLink: 'https://www.youtube.com/live/RMtJXgFb_2E?si=ahXga1nnhc5o89WO' // Atmospheric and calming music
    },
    Drizzle: {
        activities: [
            { activity: 'Visit a cozy café ☕', emoji: '' },
            { activity: 'Read a magazine ', emoji: '' },
            { activity: 'Draw or paint ', emoji: '️' },
        ],
        music: 'Smooth jazz ',
        youtubeLink: 'https://youtu.be/8dFExnve2do?si=qH3HIDkm2qcl9Ezs' // Smooth jazz playlist
    },
    Fog: {
        activities: [
            { activity: 'Explore the local area ', emoji: '‍♀️' },
            { activity: 'Take moody photos ', emoji: '️' },
            { activity: 'Write a journal entry ', emoji: '️' },
        ],
        music: 'Mystical melodies ',
        youtubeLink: 'https://youtu.be/09r8XdHRWe8?si=2jAhTmY5fceLlQP2' // Mystical music
    },
    Haze: {
        activities: [
            { activity: 'Meditate 🧘‍♂️', emoji: '🧘‍♀️' },
            { activity: 'Do yoga 🧘‍♀️', emoji: '🧘‍♂️' },
            { activity: 'Relax with deep breathing exercises 🌬️', emoji: '🌿' },
        ],
        music: 'Ambient chill 🎶',
        youtubeLink: 'https://youtu.be/cq2Ef6rvL6g?si=4nDaJAO8tVy8jj5u'
    },
    Smoke: {
        activities: [
            { activity: 'Stay indoors and play board games 🎲', emoji: '🧩' },
            { activity: 'Watch a documentary 🎥', emoji: '📺' },
            { activity: 'Try new recipes 🍲', emoji: '👩‍🍳' },
        ],
        music: 'Lo-fi beats 🎧',
        youtubeLink: 'https://youtu.be/JdqL89ZZwFw?si=CRNbQfxVRBeEbplJ'
    },
    Dust: {
        activities: [
            { activity: 'Do an indoor workout 💪', emoji: '🏋️' },
            { activity: 'Clean and organize your space 🧹', emoji: '🧼' },
            { activity: 'Start a craft project 🧶', emoji: '✂️' },
        ],
        music: 'Upbeat electronic 🎵',
        youtubeLink: 'https://youtu.be/H12Fk08_2TQ?si=thbT2mqaT2Dfa-6t'
    },
    Sand: {
        activities: [
            { activity: 'Watch a travel documentary 🗺️', emoji: '🎥' },
            { activity: 'Plan a future trip ✈️', emoji: '🗺️' },
            { activity: 'Read about different cultures 📚', emoji: '🌍' },
        ],
        music: 'World music 🎶',
        youtubeLink: 'https://youtu.be/1YvdAZ9LMik?si=DZ3WfnK-LgaNsZgO'
    },
    Ash: {
        activities: [
            { activity: 'Catch up on your favorite TV shows 📺', emoji: '🍿' },
            { activity: 'Journal your thoughts 📓', emoji: '🖊️' },
            { activity: 'Do some gentle stretching 🧘‍♀️', emoji: '🧘‍♂️' },
        ],
        music: 'Acoustic comfort 🎸',
        youtubeLink: 'https://youtu.be/htnobkrtDoo?si=s2uIpzLpd7YIll3N'
    },
    Squall: {
        activities: [
            { activity: 'Read a thrilling novel 📖', emoji: '🔍' },
            { activity: 'Listen to an audiobook 🎧', emoji: '🎙️' },
            { activity: 'Work on a puzzle 🧩', emoji: '🧠' },
        ],
        music: 'Intense soundtracks 🎼',
        youtubeLink: 'https://www.youtube.com/watch?v=https://youtu.be/IqiTJK_uzUY?si=Mf7NGii5WCCLrleO'
    },
    Tornado: {
        activities: [
            { activity: 'Ensure safety and stay informed 🌀', emoji: '📻' },
            { activity: 'Gather emergency supplies 💼', emoji: '🧰' },
            { activity: 'Stay calm with soothing sounds 🎧', emoji: '🕊️' },
        ],
        music: 'Calming ambient sounds 🎵',
        youtubeLink: 'https://youtu.be/pW0F3w_7Yyg?si=pwZ9cVuOr0Qz0mxO'
    },
};

export default moodSuggestions;