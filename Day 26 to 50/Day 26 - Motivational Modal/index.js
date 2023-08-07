let interval1;
let interval2;

const PHRASE_DATABASE = [ //Made  with an AI
    ["The couch", "if you want to grow, get outside your comfort zone."],
    ["Embrace the Journey", "Success is not just a destination; it's the joy of every step you take."],
    ["Sky's the Limit", "Don't be afraid to reach for the stars; you might just touch the moon."],
    ["Rise from Ashes", "Even in your darkest moments, remember you have the strength to rise again."],
    ["Dance in the Rain", "Life isn't about waiting for storms to pass; it's about learning to dance in the rain."],
    ["Seize the Day", "Opportunity knocks on your door every day; all you need to do is open it."],
    ["Be Bold, Be Brave", "Fear is just a hurdle; courage is how you overcome it."],
    ["Believe and Achieve", "Your belief in yourself lays the foundation for your success."],
    ["Create Your Destiny", "You are the author of your life's story; make it a bestseller."],
    ["Find Your North Star", "Stay true to your values; they'll guide you through any storm."],
    ["The Power of Persistence", "Success comes to those who keep going, even when it's tough."],
    ["Turn Obstacles into Opportunities", "What others see as roadblocks, you can turn into stepping stones."],
    ["Embrace Imperfections", "It's through our flaws that our uniqueness shines."],
    ["Leap of Faith", "Sometimes, all you need is a leap of faith to discover your wings."],
    ["Aim High", "Shoot for the moon, and even if you miss, you'll land among the stars."],
    ["Shine Brightly", "Don't dim your light for others; let it illuminate the world."],
    ["Grow through Challenges", "Like a tree in a storm, adversity strengthens your roots."],
    ["Chase Your Passion", "Pursue what sets your soul on fire, and success will follow."],
    ["Every Day Counts", "Small steps each day lead to significant progress over time."],
    ["The Art of Resilience", "Bounce back stronger and wiser after every fall."],
]




function click() {
    let number = document.getElementById('number')
    let title = document.getElementById('title')
    let descrip = document.getElementById('descrip')

    document.getElementById('card').className = 'card active'
    if (interval1) clearInterval(interval1)
    interval1 = setInterval(() => {
        clearInterval(interval1)
        let n = Number(number.innerHTML)
        if (n > 19 || isNaN(n)) n = 0
        n = n + 1
        number.innerHTML = n
        title.innerHTML = PHRASE_DATABASE[n-1][0]
        descrip.innerHTML = PHRASE_DATABASE[n-1][1]
        if (interval2) clearInterval(interval2)
        interval2 = setInterval(() => {
            clearInterval(interval2)
            document.getElementById('card').className = 'card'
        }, 750)
    }, 750)


}

document.click = click