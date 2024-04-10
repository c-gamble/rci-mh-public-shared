export const resourcePages: {
    [key: string]: {
        title: string,
        bullets: string[],
        link1: string,
        link2: string,
        link3: string,
        source: string,
        hotline: string
    }
} = {
    'addiction': {
        title: 'Addiction',
        bullets: [
            "Academic struggles, lack of interest in school-related pursuits, and a decline in grades.",
            "Subpar job performance, consistent tardiness at work, fatigue, disinterest in job responsibilities, and negative performance evaluations.",
            "Observable changes in physical presentation, such as inappropriate or unkempt clothing and a disregard for personal grooming.",
            "Altered behavior, including a heightened need for privacy.",
            "Significant shifts in interpersonal relationships.",
            "Noticeable fatigue and reduced energy levels during daily activities.",
            "Increased spending or requests for financial assistance.",
            "Financial mismanagement, such as late bill payments.",
            "Changes in appetite, including decreased food intake and associated weight loss.",
            "Physical signs like bloodshot eyes, poor skin tone, and an overall tired or worn-out appearance.",
            "Defensive reactions when questioned about substance use."
          ],
        link1: 'https://www.dea.gov/recovery-resources',
        link2: 'https://mn.gov/dhs/people-we-serve/children-and-families/health-care/alcohol-drugs-addictions/resources/web-resources.jsp',
        link3: 'https://rehabs.com/local/rochester-mn/',
        source: '“Recovery Resources.” DEA.',
        hotline: 'SAMHSA National Helpline: 1-800-662-4357'
    },
    'adhd': {
        title: 'ADHD',
        bullets: [
            "Carelessness and lack of attention to detail",
            "Continually starting new tasks before finishing old ones",
            "Poor organizational skills",
            "Inability to focus or prioritize",
            "Continually losing or misplacing things",
            "Forgetfulness",
            "Restlessness and edginess",
            "Difficulty keeping quiet, and speaking out of turn",
            "Blurting out responses and often interrupting others",
            "Mood swings, irritability, and a quick temper",
            "Inability to deal with stress",
            "Extreme impatience"
          ],
        link1: 'https://www.benefits.gov/benefit/6183',
        link2: 'https://adaminc.org/#:~:text=A-D-A-Msm%20is%20Central%20Minnesota%27s,between%20individuals%2C%20organizations%20and%20professionals.',
        link3: 'https://www.psychologytoday.com/us/therapists/mn/rochester?category=adhd',
        source: '“Symptoms -Attention Deficit Hyperactivity Disorder (ADHD).” NHS Choices, NHS.',
        hotline: 'NAMI HelpLine: 1-800-950-NAMI (6264)'
    },
    'anxiety': {
        title: 'Anxiety',
        bullets: [
            "Feeling nervous, restless, or tense",
            "Having a sense of impending danger, panic, or doom",
            "Having an increased heart rate",
            "Breathing rapidly (hyperventilation)",
            "Sweating",
            "Trembling",
            "Feeling weak or tired",
            "Trouble concentrating or thinking about anything other than the present worry",
            "Having trouble sleeping",
            "Experiencing gastrointestinal (GI) problems",
            "Having difficulty controlling worry",
            "Having the urge to avoid things that trigger anxiety"
          ],
        link1: 'https://www.counseling.org/knowledge-center/mental-health-resources/anxiety',
        link2: 'https://ocdmn.com',
        link3: 'https://www.mayoclinic.org/diseases-conditions/anxiety/care-at-mayo-clinic/mac-20350972',
        source: '“Anxiety Disorders.” Mayo Clinic, Mayo Foundation for Medical Education and Research, 4 May 2018."',
        hotline: "SAMHSA's National Helpline at 800-662-HELP (4357)"
    },
    'bipolar': {
        title: 'Bipolar Disorder',
        bullets: [
            "Bipolar I disorder. You've had at least one manic episode that may be preceded or followed by hypomanic or major depressive episodes.",
            "In some cases, mania may trigger a break from reality (psychosis).",
            "Bipolar II disorder. You've had at least one major depressive episode and at least one hypomanic episode, but you've never had a manic episode.",
            "Cyclothymic disorder. You've had at least two years — or one year in children and teenagers—of many periods of hypomania symptoms and periods of depressive symptoms (though less severe than major depression).",
            "Other types. These include, for example, bipolar and related disorders induced by certain drugs or alcohol or due to a medical condition, such as Cushing's disease, multiple sclerosis, or stroke."
          ],
        link1: 'https://www.samhsa.gov/mental-health/bipolar',
        link2: 'https://namimn.org/support/support-resources/',
        link3: 'https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/care-at-mayo-clinic/mac-20355966',
        source: '“Bipolar disorder.” Mayo Clinic, Mayo Foundation for Medical Education and Research, 13 Dec 2022.',
        hotline: '1-800-950-NAMI (6264)'
    },
    'depression': {
        title: 'Depression',
        bullets: [
            "Feelings of sadness, tearfulness, emptiness, or hopelessness",
            "Angry outbursts, irritability, or frustration, even over small matters",
            "Loss of interest or pleasure in most or all normal activities, such as sex, hobbies, or sports",
            "Sleep disturbances, including insomnia or sleeping too much",
            "Tiredness and lack of energy, so even small tasks take extra effort",
            "Reduced appetite and weight loss or increased cravings for food and weight gain",
            "Anxiety, agitation, or restlessness",
            "Slowed thinking, speaking, or body movements",
            "Feelings of worthlessness or guilt, fixating on past failures or self-blame",
            "Trouble thinking, concentrating, making decisions, and remembering things",
            "Frequent or recurrent thoughts of death, suicidal thoughts, suicide attempts, or suicide",
            "Unexplained physical problems, such as back pain or headaches"
          ],
        link1: 'https://www.nimh.nih.gov/health/find-help',
        link2: 'https://mn.gov/dhs/people-we-serve/seniors/health-care/mental-health/',
        link3: 'https://www.urmc.rochester.edu/mental-health-wellness/emergency-services/crisis-call-line.aspx',
        source: 'Symptoms - Depression, Mayo Clinic.',
        hotline: 'NAMI Hotline 800-950-NAMI (6264).'
    },
    'eating-disorders': {
        title: 'Eating Disorders',
        bullets: [
            "Anorexia (an-o-REK-see-uh), also called anorexia nervosa, can be a life-threatening eating disorder. It includes an unhealthy low body weight, intense fear of gaining weight, and a view of weight and shape that is not realistic. Anorexia often involves using extreme efforts to control weight and shape, which often seriously interfere with health and daily life.",
            "Bulimia (buh-LEE-me-uh), also called bulimia nervosa, is a serious, sometimes life-threatening eating disorder. Bulimia includes episodes of bingeing, commonly followed by episodes of purging. Sometimes bulimia also includes severely limiting eating for periods of time. This often leads to stronger urges to binge eat and then purge.",
            "Binge-eating disorder involves eating food in a short amount of time. When bingeing, it feels like there's no control over eating. But binge eating is not followed by purging. During a binge, people may eat food faster or eat more food than planned. Even when not hungry, eating may continue long past feeling uncomfortably full."
          ],
        link1: 'https://www.nutrition.gov/topics/diet-and-health-conditions/eating-disorders',
        link2: 'https://www.healthpartners.com/care/specialty-centers/melrose-center/',
        link3: 'https://www.mayoclinic.org/diseases-conditions/eating-disorders/doctors-departments/ddc-20353613',
        source: '“Eating disorders.” Mayo Clinic, Mayo Foundation for Medical Education and Research, 28 Mar 2023.',
        hotline: 'Anorexia Nervosa & Associated Disorders at 1-888-375-7767'
    },
    'grief': {
        title: 'Grief',
        bullets: [
            "Intense sorrow, pain, and rumination over the loss of your loved one",
            "Focus on little else but your loved one's death",
            "Extreme focus on reminders of the loved one or excessive avoidance of reminders",
            "Intense and persistent longing or pining for the deceased",
            "Problems accepting the death",
            "Numbness or detachment",
            "Bitterness about your loss",
            "Feeling that life holds no meaning or purpose",
            "Lack of trust in others",
            "Inability to enjoy life or think back on positive experiences with your loved one"
          ],
        link1: 'https://www.cdc.gov/howrightnow/emotion/grief/index.html',
        link2: 'https://www.mnhpc.org/grief-support',
        link3: 'https://www.seasonshospice.org/grief-support',
        source: '“Complicated grief.” Mayo Clinic, Mayo Foundation for Medical Education and Research, 13 Dec 2022.',
        hotline: "SAMHSA's National Helpline at 800-662-HELP (4357)"
    },
    'ocd': {
        title: 'OCD',
        bullets: [
            "Fear of being contaminated by touching objects others have touched",
            "Doubts that you've locked the door or turned off the stove",
            "Intense stress when objects aren't orderly or facing a certain way",
            "Images of driving your car into a crowd of people",
            "Thoughts about shouting obscenities or acting inappropriately in public",
            "Unpleasant sexual images",
            "Avoidance of situations that can trigger obsessions, such as shaking hands",
            "Hand-washing until your skin becomes raw",
            "Checking doors repeatedly to make sure they're locked",
            "Checking the stove repeatedly to make sure it's off",
            "Counting in certain patterns",
            "Silently repeating a prayer, word, or phrase",
            "Arranging your canned goods to face the same way"
          ],
        link1: 'https://www.counseling.org/knowledge-center/mental-health-resources/anxiety',
        link2: 'https://ocdmn.com',
        link3: 'https://www.mayoclinic.org/diseases-conditions/obsessive-compulsive-disorder/care-at-mayo-clinic/mac-20354442',
        source: '“Obsessive-compulsive disorder (OCD).” Mayo Clinic, Mayo Foundation for Medical Education and Research, 11 Mar 2020.',
        hotline: "SAMHSA's National Helpline at 800-662-HELP (4357)"
    },
    'ptsd': {
        title: 'PTSD',
        bullets: [
            "Recurrent, unwanted distressing memories of the traumatic event",
            "Reliving the traumatic event as if it were happening again (flashbacks)",
            "Upsetting dreams or nightmares about the traumatic event",
            "Severe emotional distress or physical reactions to something that reminds you of the traumatic event",
            "Trying to avoid thinking or talking about the traumatic event",
            "Avoiding places, activities, or people that remind you of the traumatic event",
            "Negative thoughts about yourself, other people, or the world",
            "Hopelessness about the future",
            "Memory problems, including not remembering important aspects of the traumatic event",
            "Difficulty maintaining close relationships",
            "Feeling detached from family and friends",
            "Lack of interest in activities you once enjoyed",
            "Difficulty experiencing positive emotions",
            "Feeling emotionally numb"
          ],
        link1: 'https://www.counseling.org/knowledge-center/mental-health-resources/trauma-disaster',
        link2: 'https://www.mntri.org/mental-health-services',
        link3: 'https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/doctors-departments/ddc-20355975',
        source: '“Post-traumatic stress disorder.” Mayo Clinic, Mayo Foundation for Medical Education and Research, 13 Dec 2022.',
        hotline: "SAMHSA's National Helpline at 800-662-HELP (4357)"
    },
    'suicide': {
        title: 'Suicide Prevention',
        bullets: [
            "Talking about suicide — for example, making statements such as 'I'm going to kill myself,' 'I wish I were dead,' or 'I wish I hadn't been born'",
            "Getting the means to take your own life, such as buying a gun or stockpiling pills",
            "Withdrawing from social contact and wanting to be left alone",
            "Having mood swings, such as being emotionally high one day and deeply discouraged the next",
            "Being preoccupied with death, dying, or violence",
            "Feeling trapped or hopeless about a situation",
            "Increasing use of alcohol or drugs",
            "Changing normal routine, including eating or sleeping patterns",
            "Doing risky or self-destructive things, such as using drugs or driving recklessly",
            "Giving away belongings or getting affairs in order when there's no other logical explanation for doing this",
            "Saying goodbye to people as if they won't be seen again",
            "Developing personality changes or being severely anxious or agitated, particularly when experiencing some of the warning signs listed above"
          ],
        link1: 'https://www.cdc.gov/suicide/index.html',
        link2: 'https://namimn.org/education-and-public-awareness/suicide-prevention/',
        link3: 'https://www.mayoclinic.org/diseases-conditions/suicide/care-at-mayo-clinic/mac-20378060',
        source: '“Suicide and suicidal thoughts.” Mayo Clinic, Mayo Foundation for Medical Education and Research, 19 July 2022.',
        hotline: 'Suicide and Crisis Lifeline - Call 988'
    },
    'schizophrenia': {
        title: 'Schizophrenia',
        bullets: [
            "Delusions. These are false beliefs that are not based in reality. For example, you think that you're being harmed or harassed; certain gestures or comments are directed at you; you have exceptional ability or fame; another person is in love with you; or a major catastrophe is about to occur. Delusions occur in most people with schizophrenia.",
            "Hallucinations. These usually involve seeing or hearing things that don't exist. Yet for the person with schizophrenia, they have the full force and impact of a normal experience. Hallucinations can be in any of the senses, but hearing voices is the most common hallucination.",
            "Disorganized thinking (speech). Disorganized thinking is inferred from disorganized speech. Effective communication can be impaired, and answers to questions may be partially or completely unrelated. Rarely, speech may include putting together meaningless words that can't be understood, sometimes known as word salad.",
            "Extremely disorganized or abnormal motor behavior. This may show in a number of ways, from childlike silliness to unpredictable agitation. Behavior isn't focused on a goal, so it's hard to do tasks. Behavior can include resistance to instructions, inappropriate or bizarre posture, a complete lack of response, or useless and excessive movement.",
            "Negative symptoms. This refers to reduced or lack of ability to function normally. For example, the person may neglect personal hygiene or appear to lack emotion (doesn't make eye contact, doesn't change facial expressions or speaks in a monotone). Also, the person may lose interest in everyday activities, socially withdraw, or lack the ability to experience pleasure."
          ],
        link1: 'https://www.samhsa.gov/mental-health/schizophrenia',
        link2: 'https://namimn.org/support/information-and-resources/general-mental-health-resources/',
        link3: 'https://www.mayoclinic.org/diseases-conditions/schizophrenia/doctors-departments/ddc-20354451',
        source: '“Schizophrenia.” Mayo Clinic, Mayo Foundation for Medical Education and Research, 7 Jan 2020.',
        hotline: 'NAMI Helpline: 1-800-950-NAMI (6264)'
    }
}