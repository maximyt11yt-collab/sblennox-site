export type Book = {
  slug: string;
  title: string;
  description: string;       // short subtitle/tagline
  fullDescription: string;   // long blurb
  releaseDate?: string;
  pages?: number;
  coverImage: string;        // local public path
  link: string;              // Amazon URL (legacy)
  amazonUrl?: string;        // Amazon URL (preferred)
};

export const books: Book[] = [
  {
    slug: "shadows-of-steel",
    title: "Shadows of Steel",
    description: "An Arranged Marriage Mafia Romance",
    fullDescription: `Harlow
Once, I entertained a childish dream, naïve, fleeting, and foolish.
A father who cherished me. A family unbroken by betrayal.
But dreams are the illusions of the weak, and my mother ensured I outgrew them swiftly.
Now, I do not believe in love. I do not crave family. And I most certainly do not need a husband.
Yet in this world, my desires are irrelevant.
A pact was forged in my name. An arranged marriage to a man I had never met, a cold-blooded transaction to cement an alliance.
But when night falls, the groom changes.
Because the man who clasps the ring around my finger is not the one I was meant to wed.
Dante Salvatore. Capo dei Capi. Merciless. Calculating. Lethal.
He is a decade my senior, twice as ruthless, and infinitely more perilous.
If he believes I will be a docile, submissive wife, he is gravely mistaken.
No man commands me. No man possesses me.
Love? I do not need it. Do not desire it. Do not believe in it.
But someone else does.
Someone who lingers in the abyss.
Who watches. Who waits.
Who murmurs my name like an unholy vow.
He leaves me messages only I can decipher.
I was never meant to belong to him.
And yet, in his mind, I always did.

Dante
I am a man of discipline.
As Capo dei Capi, I did not seize power through recklessness. My empire stands upon a foundation of ruthlessness, control, and absolute precision.
I do not take unnecessary risks.
I do not make decisions governed by sentiment.
I do not entertain liabilities.
And yet, here she stands, my wife.
I never desired a bride. Never sought her.
Yet from the moment Harlow Moretti was bound to me, I have been unable to release her. She is wildfire and defiance, a temptation I cannot subdue.
I resisted. I faltered. I fell.
And then, they took her from me.
They dared to steal what is mine.
Now, I will raze the world to bring her back. And those who dare stand in my way will beg for mercy they will never receive.

This is a dark romance featuring mature and potentially triggering themes. Reader discretion is advised, please review the content warnings before beginning.
A guaranteed happily ever after. No cheating. The morally grey hero is completely obsessed with the heroine, his loyalty is absolute, and his eyes are only for her.`,
    releaseDate: "March 2025",
    pages: 482,
    coverImage: "/books/ShadowsR.JPG",
    link: "https://www.amazon.ie/Shadows-Steel-Arranged-Marriage-Romance/dp/B0F9KZF64D/",
    amazonUrl: "https://www.amazon.ie/Shadows-Steel-Arranged-Marriage-Romance/dp/B0F9KZF64D/",
  },
  {
    slug: "embers-of-steel",
    title: "Embers of Steel",
    description: "An Arranged Marriage Mafia Romance",
    fullDescription: `Harlow
I thought surviving him would be the hardest part.
But coming back, to a world that kept spinning in my absence, was worse.
He didn't just break me. He left me hollow.
Now, I barely recognize the woman behind my own eyes.
But my husband doesn't take fragments. He demands what's his, entirely.
And when the past resurfaces and blood spills again,
I learn that strength isn't always fire.
Sometimes, it's choosing to stay.
To trust.
To feel.

Dante
They laid hands on what's mine.
And for that, they will bleed.
Harlow was the one thing this world should've never touched.
But the moment she wore my ring, she became its target.
They tried to shatter her.
So I became ruin.
Now, I will bury every last threat, not just for revenge.
But for her.
Because once, I built an empire on discipline.
Now, I'll burn it all down for love.

This is the second book in a duet and must be read after Shadows of Steel. It contains mature themes, a devoted hero, and a hard won happily ever after. Please check trigger warnings.`,
    releaseDate: "June 2025",
    pages: 392,
    coverImage: "/books/EmbersR.JPG",
    link: "https://www.amazon.ie/Embers-Steel-Arranged-Marriage-Romance/dp/B0FF2L954Y/",
    amazonUrl: "https://www.amazon.ie/Embers-Steel-Arranged-Marriage-Romance/dp/B0FF2L954Y/",
  },
  {
    slug: "whispers-of-a-fragile-heart",
    title: "Whispers of a Fragile Heart",
    description: "A Forbidden Mafia Romance with an Obsessive Hero",
    fullDescription: `Aurora Luisa Di Luca has always lived between two worlds—grace on the ballet stage, and silence in the shadows of her family's dangerous empire. As the only daughter of the Capo of the Di Luca Cosa Nostra, hers is a name whispered among the criminal elite, a legacy steeped in power and peril.

When she is abducted by Ilya Morozov, the formidable Pakhan of the Morozov Bratva, Aurora's meticulously crafted world begins to crumble. To Ilya, she is far more than a bargaining chip, she is an obsession he cannot outrun. Bound by a volatile fusion of passion and danger, Aurora and Ilya must navigate a labyrinth of betrayal, desire, and long-buried truths.

In a world where power demands sacrifice and love defies every rule, how far will they go when obsession threatens to consume them both?

This is a dark romance featuring mature and potentially triggering themes. Reader discretion is advised, please review the content warnings before beginning.
This story includes a guaranteed happily ever after. There is no cheating, and the morally grey hero is utterly devoted to the heroine, his obsession runs deep, and his loyalty never wavers.`,
    releaseDate: "24 November 2024",
    pages: 369,
    coverImage: "/books/whispersR.JPG",
    link: "https://www.amazon.ie/Whispers-Fragile-Heart-Forbidden-Obsessive/dp/B0FDKDQRDC/",
    amazonUrl: "https://www.amazon.ie/Whispers-Fragile-Heart-Forbidden-Obsessive/dp/B0FDKDQRDC/",
  },
  {
    slug: "kiss-me-like-i-didnt-kill-you",
    title: "Kiss Me Like I Didn't Kill You",
    description: "A dark, obsessive, memory-twisted mafia romance.",
    fullDescription: `Ophelia  

I shouldn't have gone to that party.  

Every instinct I had warned me not to, but I ignored it, and the cost was more than memory could bear.  

The next morning, I woke covered in blood, bruised, and with no recollection of what had happened.  

Now, back at St. Monarché, the Ferrum Syndicate has arrived.  

And one of them—the one with midnight blue eyes, filled with too many emotions to make sense of—watches me as if I'm both his downfall and his obsession.  

He loathes me. I can see it in every glance and every breath.  

But beneath that hatred lies something neither of us dares to name.  

My mind may have forgotten him… but my body never did.  

Arlo  

Ophelia Bellanti.  

The woman who destroyed my world, and doesn't even remember doing it.  

I came to make her pay.  

To break her the way she broke me.  

But she looks at me like I'm a stranger.  

I can't decide what's worse—  

that she forgot…  

or that I never can.`,
    releaseDate: "2025",
    pages: undefined,
    coverImage: "/books/IMG_2618.JPG",
    link: "https://www.amazon.com/Kiss-Like-Didnt-Kill-You-ebook/dp/B0DL3HC2QD",
    amazonUrl: "https://www.amazon.com/Kiss-Like-Didnt-Kill-You-ebook/dp/B0DL3HC2QD",
  },
];


