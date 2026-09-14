// Each correct answer is stored as its option letter (A, B or C).
// The quiz review reads rationaleCorrect for the answer and rationalesIncorrect for distractors.
const questions = [
  {
    number: 1,
    question: "A type of wound with torn, jagged and irregular edges is known as:",
    options: {
      A: "Contused wound",
      B: "Punctured wound",
      C: "Lacerated wound"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. A laceration is a tear in the skin or underlying soft tissue, commonly caused by blunt or shearing force, and it characteristically has irregular or jagged edges.",
    rationalesIncorrect: {
      A: "A contused wound results from blunt-force trauma that crushes tissues and causes bruising. The skin may remain intact, so it is not defined by torn, jagged edges.",
      B: "A punctured wound is produced by a pointed object and typically has a small surface opening with a relatively deep, narrow tract."
    }
  },

  {
    number: 2,
    question: "A disorder characterised by episodes of both mania and depression occurring at different times is known as:",
    options: {
      A: "Major depression",
      B: "Hypomania",
      C: "Bipolar affective disorder"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Bipolar affective disorder is characterised by episodes of abnormally elevated or irritable mood, such as mania or hypomania, occurring at different times from episodes of depression.",
    rationalesIncorrect: {
      A: "Major depressive disorder involves depressive episodes without a history of manic or hypomanic episodes. The presence of mania points away from major depression.",
      B: "Hypomania is a type of elevated mood episode. It is not the complete disorder involving alternating elevated and depressive episodes."
    }
  },

  {
    number: 3,
    question: "Diaper dermatitis can best be prevented by:",
    options: {
      A: "Changing diapers infrequently to avoid disturbing the child",
      B: "Changing diapers frequently, gently cleaning and drying the skin, and applying a barrier cream",
      C: "Repeatedly washing the area with strong soap and using a tight plastic diaper"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Frequent diaper changes reduce exposure to moisture and irritants. Gentle cleaning, thorough drying and a protective barrier cream help maintain the skin barrier and prevent inflammation.",
    rationalesIncorrect: {
      A: "Infrequent diaper changes prolong contact with urine, faeces and moisture. This increases maceration, irritation and the risk of diaper dermatitis.",
      C: "Strong soap strips protective oils from the skin, while a tight plastic diaper traps heat and moisture. Both measures can worsen irritation rather than prevent it."
    }
  },

  {
    number: 4,
    question: "To prevent injury during a seizure, the Nurse Assistant performs all the following interventions EXCEPT:",
    options: {
      A: "Restrain the patient",
      B: "Loosen constrictive clothing",
      C: "Protect the head with a soft pad"
    },
    correctAnswer: "A",
    rationaleCorrect: "Correct. A person having a seizure should not be forcibly restrained. Restraint can cause fractures, joint injuries or soft-tissue damage and will not stop the seizure.",
    rationalesIncorrect: {
      B: "Loosening tight clothing, especially around the neck, can improve comfort and reduce restriction while the seizure runs its course.",
      C: "Placing something soft beneath the head is appropriate because it reduces the risk of head injury from repeated contact with a hard surface."
    }
  },

  {
    number: 5,
    question: "A boy has been knocked off his bicycle and is bleeding profusely from his right leg. Which option represents a general rule of first aid?",
    options: {
      A: "Pour water on the unconscious casualty",
      B: "Remove the casualty from immediate danger",
      C: "Give the casualty an alcoholic drink"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Scene safety comes first. The casualty should be moved only if an immediate hazard remains; once safe, severe bleeding should be controlled promptly with direct pressure.",
    rationalesIncorrect: {
      A: "Pouring water on an unconscious casualty does not restore consciousness and may delay assessment of the airway, breathing, circulation and serious injuries.",
      C: "Alcohol must not be given to an injured person because it can impair consciousness, promote aspiration, affect circulation and interfere with further assessment or treatment."
    }
  },

  {
    number: 6,
    question: "During an epileptic attack, the patient's muscles repeatedly relax and contract, causing jerking and twitching of the whole body. Which stage is this?",
    options: {
      A: "Tonic stage",
      B: "Comatose stage",
      C: "Clonic stage"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. The clonic stage consists of repeated, rhythmic contraction and relaxation of muscles, producing the characteristic jerking movements.",
    rationalesIncorrect: {
      A: "The tonic stage involves sustained contraction and generalised muscle rigidity rather than alternating contraction and relaxation.",
      B: "Comatose is not a motor phase of a tonic-clonic seizure. After a seizure, the patient may instead enter a postictal period of sleepiness, confusion or reduced responsiveness."
    }
  },

  {
    number: 7,
    question: "Which measures should be completed before a blood transfusion? I. Confirm the prescription. II. Confirm grouping and cross-matching. III. Verify informed consent. IV. Record baseline vital signs.",
    options: {
      A: "I, II and IV",
      B: "I and III",
      C: "I, II, III and IV"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. A valid prescription, compatibility testing, informed consent and baseline observations are all important pre-transfusion safety checks.",
    rationalesIncorrect: {
      A: "This combination omits verification of informed consent. The patient should understand the purpose, benefits and relevant risks of transfusion before it begins, according to local policy.",
      B: "This combination omits compatibility testing and baseline vital signs. Both are essential for preventing incompatible transfusion and detecting a subsequent reaction."
    }
  },

  {
    number: 8,
    question: "A 17-year-old boy has intentionally inhaled petrol vapour from a gallon. Which complication is he most likely to experience?",
    options: {
      A: "Blindness",
      B: "Brain atrophy",
      C: "Hallucinations"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Petrol vapour affects the central nervous system and may cause dizziness, euphoria, confusion, altered perception and hallucinations.",
    rationalesIncorrect: {
      A: "Blindness is classically associated with methanol poisoning. Although petrol vapour may irritate the eyes, blindness is not the most likely effect among these options.",
      B: "Long-term exposure to some volatile solvents can cause chronic neurological damage, but brain atrophy is not the most likely immediate manifestation in this scenario."
    }
  },

  {
    number: 9,
    question: "Nursing ethics is best described as:",
    options: {
      A: "Nurses' core function of caring for patients",
      B: "The formal and systematic study of moral beliefs and conduct",
      C: "Nurses' rights and responsibilities only"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Ethics systematically examines moral values and principles used to determine right and wrong conduct; nursing ethics applies them to nursing practice and patient care.",
    rationalesIncorrect: {
      A: "Caring is a fundamental nursing function, but it does not fully define nursing ethics or the principles used to judge professional conduct.",
      C: "Professional rights and responsibilities form part of ethical practice, but nursing ethics is broader and also covers values, duties, relationships and decision-making."
    }
  },

  {
    number: 10,
    question: "A two-year-old child accidentally drinks a corrosive substance. The Nurse Assistant should perform all the following actions EXCEPT:",
    options: {
      A: "Assess the airway, breathing and circulation and treat shock if present",
      B: "Induce vomiting to remove the corrosive substance",
      C: "Identify the substance and arrange urgent medical referral"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Vomiting must not be induced because the corrosive substance can burn the oesophagus and pharynx again and may be aspirated into the lungs.",
    rationalesIncorrect: {
      A: "Airway swelling, breathing difficulty and circulatory collapse can follow severe corrosive ingestion. Immediate assessment and supportive care are therefore appropriate.",
      C: "Identifying the substance and preserving its container can guide management. The child also requires urgent professional assessment even if symptoms initially appear mild."
    }
  },

  {
    number: 11,
    question: "A patient is admitted after over-ingesting prescribed antipsychotic medication. After immediate stabilisation, which information is most important to obtain?",
    options: {
      A: "The nearest relative's name and telephone number",
      B: "The medication taken and estimated amount ingested",
      C: "The total length of time the patient has used the medication"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Identifying the drug and estimated dose helps clinicians predict toxic effects, decide which investigations are required and select appropriate supportive or antidotal treatment.",
    rationalesIncorrect: {
      A: "Contact information may be useful later, but it does not immediately determine the expected toxicity or emergency treatment required.",
      C: "The duration of prescribed use provides background information, but it is less urgent than knowing the specific drug and amount involved in the overdose."
    }
  },

  {
    number: 12,
    question: "Which activity is most appropriate for a client with bipolar disorder who is displaying aggressive behaviour?",
    options: {
      A: "Basketball",
      B: "Writing",
      C: "Chess"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Writing is quiet, solitary and non-competitive. It reduces external stimulation and allows expression without requiring prolonged interaction with other clients.",
    rationalesIncorrect: {
      A: "Basketball is physically stimulating and competitive. It can increase excitement, interpersonal conflict and aggressive behaviour in an already agitated client.",
      C: "Chess is physically quiet but competitive and requires sustained concentration. A manic or highly agitated client may have a short attention span and react poorly to competition."
    }
  },

  {
    number: 13,
    question: "A four-year-old child on the ward is unable to sleep. Which measures may promote sleep? I. Provide calm diversional activity. II. Ensure the bed is free of crumbs. III. Safely ventilate the room. IV. Offer a suitable warm, non-caffeinated drink.",
    options: {
      A: "I, II and III",
      B: "I, II, III and IV",
      C: "I, II and IV"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Quiet diversion can reduce anxiety, a clean bed improves comfort, safe ventilation supports an appropriate room environment and a warm non-caffeinated drink may promote relaxation.",
    rationalesIncorrect: {
      A: "These measures are helpful, but this combination omits a suitable warm drink, which may be included in a calming bedtime routine if appropriate for the child.",
      C: "This combination omits safe ventilation. A comfortable room temperature and fresh air may support sleep, provided the child is not exposed to cold or another environmental hazard."
    }
  },

  {
    number: 14,
    question: "An adult has burns involving the entire head and neck and the anterior trunk. Using the Rule of Nines, what percentage of total body surface area is burnt?",
    options: {
      A: "13%",
      B: "54%",
      C: "27%"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. In an adult, the entire head and neck equal 9% and the anterior trunk equals 18%; therefore, the total is 9% + 18% = 27%.",
    rationalesIncorrect: {
      A: "Thirteen percent does not correspond to the adult Rule of Nines values for the entire head and neck plus the anterior trunk.",
      B: "Fifty-four percent would include several additional body regions and considerably overestimates the described burn area."
    }
  },

  {
    number: 15,
    question: "A patient has undergone rigid fixation of the jaw. Among the options, for how many weeks should the patient initially avoid chewing food?",
    options: {
      A: "2 weeks",
      B: "4 weeks",
      C: "3 weeks"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Heavy fixation is commonly maintained for about four weeks before progression to lighter fixation and a soft diet, although the exact duration must follow the surgeon's instructions.",
    rationalesIncorrect: {
      A: "Two weeks is generally too early for routine chewing because the fracture or osteotomy may not have developed adequate initial stability.",
      C: "At three weeks healing is progressing, but this is shorter than the intended minimum period among the supplied options. Some patients may require no-chew restrictions for six weeks or longer."
    }
  },

  {
    number: 16,
    question: "What is the best food for a five-month-old baby who has been left in the care of a caretaker?",
    options: {
      A: "Infant formula",
      B: "Weanimix",
      C: "Expressed breast milk"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Exclusive breastfeeding is recommended for the first six months, and expressed breast milk allows the infant to continue receiving breast milk while the mother is absent.",
    rationalesIncorrect: {
      A: "Infant formula may be required when breast milk is unavailable or contraindicated, but it is not preferable when safely expressed breast milk is available.",
      B: "Weanimix is a complementary food intended for use from about six months. Introducing it at five months would end exclusive breastfeeding prematurely."
    }
  },

  {
    number: 17,
    question: "A pregnant woman's last menstrual period began on 6 May 2018. Using Naegele's Rule, what is her expected date of delivery?",
    options: {
      A: "13 February 2019",
      B: "6 February 2019",
      C: "13 March 2019"
    },
    correctAnswer: "A",
    rationaleCorrect: "Correct. Naegele's Rule adds seven days, subtracts three calendar months and adds one year: 6 May 2018 becomes 13 February 2019.",
    rationalesIncorrect: {
      B: "This date results from subtracting three months and adding one year without also adding the required seven days.",
      C: "This is one month later than the date obtained by correctly applying Naegele's Rule."
    }
  },

  {
    number: 18,
    question: "A man sleeps, eats, laughs and exercises while coping with everyday stress. Which level of anxiety is most consistent with his behaviour?",
    options: {
      A: "Severe anxiety",
      B: "Mild anxiety",
      C: "Moderate anxiety"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Mild anxiety is an adaptive response to ordinary stress. The individual remains able to function and use healthy coping strategies such as sleep, nutrition and exercise.",
    rationalesIncorrect: {
      A: "Severe anxiety markedly narrows perception and interferes with reasoning, concentration and normal daily functioning. The described person remains functional.",
      C: "Moderate anxiety narrows attention and may make concentration or problem-solving more difficult. Those limitations are not demonstrated in the scenario."
    }
  },

  {
    number: 19,
    question: "A situation in which a person must choose between two or more actions that can each be morally justified is called an ethical:",
    options: {
      A: "Principle",
      B: "Dilemma",
      C: "Analysis"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. An ethical dilemma arises when competing morally defensible choices or values conflict and selecting one option may compromise another.",
    rationalesIncorrect: {
      A: "An ethical principle, such as autonomy or justice, is a standard that guides decisions. It is not the conflicting situation itself.",
      C: "Ethical analysis is the process used to examine facts, values and possible consequences when resolving an ethical problem."
    }
  },

  {
    number: 20,
    question: "How many people are required for the three-person technique used to lift a casualty with a fractured femur onto a stretcher?",
    options: {
      A: "Four people",
      B: "Three people",
      C: "Two people"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Three trained rescuers can coordinate support of the upper body, pelvis and injured lower limb while maintaining alignment during the lift.",
    rationalesIncorrect: {
      A: "Four bearers may provide extra support and are often used to carry a loaded stretcher, but the technique specified in the question is the three-person lift.",
      C: "Two people cannot adequately support the upper body, pelvis and fractured limb simultaneously, increasing pain and the risk of further displacement."
    }
  },

  {
    number: 21,
    question: "A child has swallowed a poisonous substance. Which responsibilities apply to the Nurse Assistant? I. Inspect the mouth. II. Remove poison remaining in the mouth. III. Identify the poison from its container. IV. Arrange referral for further management.",
    options: {
      A: "I, II and III",
      B: "II, III and IV",
      C: "I, II, III and IV"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. All four measures are appropriate. The child should not be made to vomit, and urgent expert advice is required even if symptoms initially appear mild.",
    rationalesIncorrect: {
      A: "Inspecting the mouth, removing residual material and identifying the poison are appropriate, but this combination omits urgent referral or poison-specialist guidance.",
      B: "Removing remaining material, identifying the poison and arranging referral are appropriate, but the mouth should also be inspected for retained material or chemical injury."
    }
  },

  {
    number: 22,
    question: "A system of standards or moral principles that directs actions as right or wrong is termed:",
    options: {
      A: "Morals",
      B: "Ethics",
      C: "Values"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Ethics is the organised set and study of moral principles used to evaluate conduct and decide what ought to be done.",
    rationalesIncorrect: {
      A: "Morals are personal or societal beliefs about acceptable conduct. They contribute to ethical judgement but are not the formal guiding system requested.",
      C: "Values are beliefs about what is important, worthwhile or desirable. They influence decisions but do not by themselves form the complete ethical system."
    }
  },

  {
    number: 23,
    question: "What is the primary ethical rationale for obtaining informed consent?",
    options: {
      A: "Protection of the patient from all injury",
      B: "Protection of individual autonomy",
      C: "Protection of the patient's privacy"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Informed consent respects autonomy by enabling a competent person to understand the proposed care and voluntarily accept or refuse it.",
    rationalesIncorrect: {
      A: "Preventing injury relates mainly to non-maleficence and patient safety. Consent cannot guarantee that no injury or adverse effect will occur.",
      C: "Privacy is the right to control access to one's body and personal information. It is important, but it is not the principal ethical foundation of informed consent."
    }
  },

  {
    number: 24,
    question: "A 12-year-old child is brought to the emergency unit after eating potentially poisonous berries. What should the Nurse Assistant do first?",
    options: {
      A: "Give an emetic to induce vomiting",
      B: "Give an aperient to accelerate bowel emptying",
      C: "Remove berries remaining in the mouth, preserve a sample and seek urgent medical or poison-centre advice"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Immediate priorities include removing residual berries safely, identifying the plant if possible and obtaining expert advice so management can be based on the substance and amount ingested.",
    rationalesIncorrect: {
      A: "Inducing vomiting is not routine poisoning first aid. It may cause aspiration or additional injury and should never be attempted unless specifically directed by a poison specialist.",
      B: "An aperient does not reliably prevent absorption of poison and may cause fluid loss or other complications. It should not be given without a specific prescription."
    }
  },

  {
    number: 25,
    question: "Which major blood vessel carries deoxygenated blood from the upper extremities, head and neck to the heart?",
    options: {
      A: "Inferior vena cava",
      B: "Right pulmonary vein",
      C: "Superior vena cava"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. The superior vena cava receives systemic venous blood from structures above the diaphragm and empties it into the right atrium.",
    rationalesIncorrect: {
      A: "The inferior vena cava returns deoxygenated blood from structures below the diaphragm, including the abdomen, pelvis and lower limbs.",
      B: "The right pulmonary veins carry oxygenated blood from the right lung to the left atrium, not deoxygenated blood from the upper body."
    }
  },

  {
    number: 26,
    question: "A client in drug rehabilitation says he only uses drugs when stressed and therefore does not have a substance-use problem. Which defence mechanism is he using?",
    options: {
      A: "Suppression",
      B: "Denial",
      C: "Undoing"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Denial involves refusing to acknowledge an unpleasant reality. The client minimises his drug use and rejects the conclusion that it represents a problem.",
    rationalesIncorrect: {
      A: "Suppression is the conscious decision to postpone thinking about a distressing matter. The client is instead rejecting the existence or seriousness of the problem.",
      C: "Undoing involves attempting to cancel an unacceptable thought or action by performing another action, which is not demonstrated in this scenario."
    }
  },

  {
    number: 27,
    question: "Which developmental stage is most strongly associated with the challenge of establishing a personal identity?",
    options: {
      A: "Adolescence",
      B: "Young adulthood",
      C: "Toddlerhood"
    },
    correctAnswer: "A",
    rationaleCorrect: "Correct. In Erikson's theory, adolescence involves identity versus role confusion. The adolescent explores beliefs, roles, goals and values to develop a coherent sense of self.",
    rationalesIncorrect: {
      B: "Young adulthood is primarily associated with intimacy versus isolation, which concerns forming close and committed relationships.",
      C: "Toddlerhood is associated with autonomy versus shame and doubt, as the child develops independence and self-control."
    }
  },

  {
    number: 28,
    question: "Which body-mechanics principles should be followed when lifting a bedridden patient? I. Keep the back erect. II. Lift mainly with the dominant arm. III. Stay close to the patient. IV. Keep the patient near waist height and close to the centre of gravity.",
    options: {
      A: "I, II and III",
      B: "I, III and IV",
      C: "II, III and IV"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Safe handling involves maintaining spinal alignment, staying close to the patient and keeping the load near the caregiver's centre of gravity. Leg muscles and assistive devices should be used.",
    rationalesIncorrect: {
      A: "This includes the incorrect instruction to lift mainly with one arm. Depending on a dominant arm produces uneven loading and increases the risk of injury.",
      C: "This includes the unsafe dominant-arm technique and excludes proper back alignment. Both omissions increase strain and reduce control of the transfer."
    }
  },

  {
    number: 29,
    question: "The following statements describe the prostate gland EXCEPT that it:",
    options: {
      A: "Contributes enzymes that change the consistency of semen after ejaculation",
      B: "Emerges from the bladder and helps to produce urine",
      C: "Secretes a thin, milky fluid that contributes approximately 30% of semen"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. The prostate lies below the bladder and surrounds part of the urethra, but it does not produce urine. Urine is formed by the kidneys.",
    rationalesIncorrect: {
      A: "Prostatic secretions contain enzymes, including prostate-specific antigen, which help liquefy semen after it initially coagulates.",
      C: "The prostate produces a thin, milky secretion that forms a substantial proportion of seminal fluid and supports sperm function."
    }
  },

  {
    number: 30,
    question: "What is the standard number of bones in the adult human skeletal system?",
    options: {
      A: "205",
      B: "201",
      C: "206"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. The standard adult skeleton contains approximately 206 bones, although minor anatomical variation can occur between individuals.",
    rationalesIncorrect: {
      A: "Two hundred and five is one fewer than the standard anatomical count used for the adult skeleton.",
      B: "Two hundred and one is five fewer than the accepted standard count and excludes several recognised bones."
    }
  },

  {
    number: 31,
    question: "Which measures promote a good interpersonal relationship with patients and families? I. Establish rapport. II. Encourage open communication. III. Respect patients' views. IV. Show sympathy rather than empathy.",
    options: {
      A: "II, III and IV",
      B: "I, II and III",
      C: "I, II and IV"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Rapport builds trust, open communication encourages participation and respecting patients' views supports dignity, autonomy and person-centred care.",
    rationalesIncorrect: {
      A: "Open communication and respect are appropriate, but professional care emphasises empathy rather than sympathy or pity.",
      C: "Rapport and communication are important, but this combination substitutes sympathy for respect. Empathy is the preferred therapeutic response because it preserves professional judgement."
    }
  },

  {
    number: 32,
    question: "A Nurse Assistant notices that a colleague frequently arrives at work intoxicated. Which action best protects patients and helps the colleague obtain assistance?",
    options: {
      A: "Report the behaviour promptly to the appropriate supervisor",
      B: "Ignore the behaviour and frequently assess the colleague's patients",
      C: "Privately warn the colleague but allow the colleague to continue working"
    },
    correctAnswer: "A",
    rationaleCorrect: "Correct. Reporting objective signs of impairment enables the supervisor to remove the nurse from unsafe practice, protect patients and arrange appropriate assessment or support.",
    rationalesIncorrect: {
      B: "Monitoring the patients does not remove the impaired colleague's access to care activities and cannot reliably prevent unsafe decisions or medication errors.",
      C: "A private warning alone is inadequate when immediate patient safety is threatened. The impaired nurse should not be allowed to continue clinical duties pending formal assessment."
    }
  },

  {
    number: 33,
    question: "Which group should be prioritised when providing primary-prevention education about alcohol misuse?",
    options: {
      A: "Adolescents in their late teens and young adults in their early twenties",
      B: "Women who work outside the home",
      C: "Elderly retired men"
    },
    correctAnswer: "A",
    rationaleCorrect: "Correct. Adolescence and early adulthood are common periods for initiating alcohol use. Education before harmful patterns develop can strengthen knowledge, refusal skills and healthy coping.",
    rationalesIncorrect: {
      B: "Working outside the home does not by itself identify a population at the greatest risk of initiating alcohol misuse.",
      C: "Older adults can experience harmful alcohol use and may need intervention, but they are not the priority group for preventing initial alcohol-use patterns among these options."
    }
  },

  {
    number: 34,
    question: "A client with dementia says, 'Look at the spiders on the wall.' Which response is most therapeutic?",
    options: {
      A: "I can see the spiders, but they will not hurt you.",
      B: "You are hallucinating; there are no spiders in this room.",
      C: "I understand that you are frightened, but I do not see spiders on the wall."
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. The response acknowledges the patient's fear without validating the false perception and gently presents reality in a calm, supportive manner.",
    rationalesIncorrect: {
      A: "This response reinforces the hallucination by agreeing that the spiders are present. Reinforcement may increase fear and confusion.",
      B: "This bluntly confronts and labels the experience. Arguing can make a person with dementia feel dismissed, frightened or mistrustful."
    }
  },

  {
    number: 35,
    question: "A nurse immediately reports to the nurse in charge after mistakenly administering a medication overdose. Which professional quality is best demonstrated?",
    options: {
      A: "Accountability",
      B: "Honesty",
      C: "Empathy"
    },
    correctAnswer: "A",
    rationaleCorrect: "Correct. Accountability means accepting responsibility for one's professional actions and taking the required steps to protect the patient after an error occurs.",
    rationalesIncorrect: {
      B: "The nurse is also being honest, but accountability is the better answer because reporting initiates assessment, treatment, documentation and review of the error.",
      C: "Empathy is the ability to understand another person's feelings. It does not specifically describe accepting responsibility for a clinical error."
    }
  },

  {
    number: 36,
    question: "What should the Nurse Assistant do first for a patient with epistaxis?",
    options: {
      A: "Apply a cold compress to the bridge of the nose",
      B: "Loosen clothing around the neck, chest and waist",
      C: "Sit the patient upright and leaning slightly forward"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Sitting upright reduces venous pressure in the nose, while leaning forward allows blood to drain out rather than entering the throat and being swallowed or aspirated.",
    rationalesIncorrect: {
      A: "A cold compress may provide additional vasoconstriction, but positioning and continuous pressure to the soft part of the nose are more important first-aid measures.",
      B: "Loosening restrictive clothing may improve comfort, but it does not directly reduce nasal blood flow or prevent the patient from swallowing blood."
    }
  },

  {
    number: 37,
    question: "A pregnant woman reports urinary frequency at 36 weeks. Which physiological change best explains this symptom?",
    options: {
      A: "The fetal head has descended into the pelvis",
      B: "The woman necessarily has a urinary infection",
      C: "The enlarging uterus is rising out of the pelvis"
    },
    correctAnswer: "A",
    rationaleCorrect: "Correct. Near term, descent or engagement of the fetal head increases pressure on the bladder, reduces its functional capacity and causes more frequent urination.",
    rationalesIncorrect: {
      B: "A urinary infection can cause frequency, but it is pathological and may also cause dysuria, urgency, suprapubic pain, fever or abnormal urine. Frequency alone at 36 weeks is often physiological.",
      C: "The uterus rises out of the pelvis earlier in pregnancy, which may temporarily reduce bladder pressure. At 36 weeks, descent of the presenting part is the better explanation."
    }
  },

  {
    number: 38,
    question: "Which measures help prevent choking in a baby? I. Avoid propping a feeding bottle. II. Remove small objects from the floor. III. Avoid hard foods such as whole nuts and raw carrot pieces. IV. Leave small objects within reach briefly.",
    options: {
      A: "I, III and IV",
      B: "I, II and IV",
      C: "I, II and III"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Babies require active feeding supervision, an environment free of small objects and foods prepared in a developmentally appropriate texture and size.",
    rationalesIncorrect: {
      A: "This includes Statement IV, which is unsafe. A baby can place a small object in the mouth and choke within seconds.",
      B: "This also includes the unsafe Statement IV and omits the need to avoid or appropriately modify hard foods that a baby cannot chew safely."
    }
  },

  {
    number: 39,
    question: "An eight-year-old child has a foreign body in the eye. Which first-aid action is most appropriate when the nature and depth of the object are unknown?",
    options: {
      A: "Rub the eye repeatedly",
      B: "Remove the object with a clean handkerchief",
      C: "Loosely protect the eye without pressure and seek medical care"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Protecting the eye without applying pressure reduces further injury while professional assessment is obtained. A loose superficial particle may instead be gently irrigated with clean water.",
    rationalesIncorrect: {
      A: "Rubbing may drag the object over the cornea, causing abrasion, or force it deeper into the tissue.",
      B: "A handkerchief may introduce microorganisms, scratch the cornea or worsen an embedded injury. An embedded object should not be manually removed."
    }
  },

  {
    number: 40,
    question: "A Nurse Assistant uses a personal mobile phone to photograph a patient with an unusual condition without consent. The act is best described as:",
    options: {
      A: "Conflict of interest",
      B: "Breach of confidentiality",
      C: "Invasion of privacy"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Privacy includes the patient's right to control access to the body and personal image. A clinical photograph requires valid consent and secure, authorised handling.",
    rationalesIncorrect: {
      A: "A conflict of interest occurs when personal interests compete with professional duties. That is not the main ethical violation created by taking the photograph.",
      B: "Sharing or disclosing the photograph would also breach confidentiality, but the unauthorised act of capturing the patient's image first violates privacy."
    }
  },

  {
    number: 41,
    question: "An adult has burns involving the entire head and neck and the anterior trunk. Using the Rule of Nines, what percentage of total body surface area is burnt?",
    options: {
      A: "18%",
      B: "27%",
      C: "38%"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. The entire adult head and neck equal 9% and the anterior trunk equals 18%; therefore, 9% + 18% = 27%.",
    rationalesIncorrect: {
      A: "Eighteen percent represents the anterior trunk alone and fails to include the additional 9% assigned to the entire head and neck.",
      C: "Thirty-eight percent does not correspond to the Rule of Nines values for the two regions described and overestimates the burn."
    }
  },

  {
    number: 42,
    question: "The following are possible warning findings during pregnancy EXCEPT:",
    options: {
      A: "The uterus measures larger or smaller than expected for gestational age",
      B: "The fetal head is not engaged in a primigravida at term",
      C: "The mother demonstrates normal weight gain during pregnancy"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Appropriate maternal weight gain is an expected physiological change that supports fetal growth, placental development, blood-volume expansion and maternal energy stores.",
    rationalesIncorrect: {
      A: "A fundal height smaller than expected may suggest incorrect dates, fetal growth restriction or low fluid, while a larger measurement may indicate multiple pregnancy, macrosomia or excess fluid.",
      B: "A fetal head that remains unengaged at term in a primigravida does not prove a complication, but it warrants assessment for malpresentation, cephalopelvic disproportion or another cause."
    }
  },

  {
    number: 43,
    question: "A Nurse Assistant is assigned a task in another ward that is beyond the assistant's competence. What is the best action?",
    options: {
      A: "Discuss the problem only with another Nurse Assistant",
      B: "Inform the nurse in charge and discuss the limitation",
      C: "Leave the ward and return to the usual unit without informing anyone"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. Informing the nurse in charge allows the task to be reassigned or supervised appropriately and prevents the assistant from practising beyond competence.",
    rationalesIncorrect: {
      A: "A colleague may provide support but may not have the authority to change the assignment, provide the required supervision or ensure safe delegation.",
      C: "Leaving without communication can interrupt patient care and may be considered abandonment of an assigned responsibility. The concern must be escalated through the proper channel."
    }
  },

  {
    number: 44,
    question: "Alcohol provides food energy because it contains ___; however, it has little or no ___ value.",
    options: {
      A: "Calories; nutritional",
      B: "Nutrients; addictive",
      C: "Ethanol; addictive"
    },
    correctAnswer: "A",
    rationaleCorrect: "Correct. Alcohol supplies about 7 kilocalories per gram but provides no meaningful protein, vitamins, minerals or other essential nutrients; its energy is therefore described as empty calories.",
    rationalesIncorrect: {
      B: "Alcohol provides calories rather than essential nutrients, and 'addictive value' is not a recognised nutritional concept.",
      C: "Alcohol does contain ethanol and can cause dependence, but this pairing does not correctly complete a statement about energy content and nutritional value."
    }
  },

  {
    number: 45,
    question: "A person persistently craves and eats clay, dust and charcoal. Which nutritional deficiency is most commonly associated with this form of pica?",
    options: {
      A: "Folate deficiency",
      B: "Vitamin B deficiency",
      C: "Iron deficiency"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Pica is strongly associated with iron deficiency and iron-deficiency anaemia, although it can have other nutritional, cultural or psychological causes and requires proper assessment.",
    rationalesIncorrect: {
      A: "Folate deficiency can produce megaloblastic anaemia but is not the deficiency most characteristically associated with cravings for non-food substances.",
      B: "Some B-vitamin deficiencies cause anaemia or neurological symptoms, but they are not as strongly linked to pica as iron deficiency."
    }
  },

  {
    number: 46,
    question: "A casualty develops facial swelling, breathing difficulty and signs of shock following an insect sting. Which type of shock is most likely?",
    options: {
      A: "Anaphylactic shock",
      B: "Neurogenic shock",
      C: "Psychogenic shock"
    },
    correctAnswer: "A",
    rationaleCorrect: "Correct. Anaphylaxis is a rapid systemic allergic reaction that causes airway oedema or bronchospasm together with vasodilation and capillary leakage, producing hypotension and shock.",
    rationalesIncorrect: {
      B: "Neurogenic shock results from loss of sympathetic vascular tone, usually after spinal cord injury. It does not explain facial swelling after an insect sting.",
      C: "Psychogenic shock usually refers to fainting related to fear, pain or emotional stress and does not produce allergic airway swelling and systemic hypotension."
    }
  },

  {
    number: 47,
    question: "When should breastfeeding ideally begin after delivery when the mother and newborn are clinically stable?",
    options: {
      A: "After the baby's first bath",
      B: "Three hours after birth",
      C: "Within 30 minutes after birth"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Breastfeeding should begin as soon as possible and within the first hour of birth. Among the options, initiation within 30 minutes best meets this recommendation.",
    rationalesIncorrect: {
      A: "Bathing can be delayed and should not interrupt early skin-to-skin contact or the first breastfeeding opportunity.",
      B: "Waiting three hours unnecessarily delays colostrum intake, skin-to-skin contact and stimulation of the maternal milk-production response."
    }
  },

  {
    number: 48,
    question: "Which is NOT a common adverse effect of modern modified electroconvulsive therapy?",
    options: {
      A: "Transient confusion",
      B: "Headache",
      C: "Bone fracture"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Modern ECT uses anaesthesia and a muscle relaxant, greatly limiting muscular contraction. Fractures are therefore rare rather than a common adverse effect.",
    rationalesIncorrect: {
      A: "Temporary confusion is common immediately after the induced seizure and anaesthesia, particularly in older adults, and usually resolves with observation and reassurance.",
      B: "Headache is a recognised short-term adverse effect of ECT and can generally be managed with assessment and appropriate analgesia."
    }
  },

  {
    number: 49,
    question: "A competent adult receives adequate information about a prescribed medication but decides not to continue taking it. What should the nurse do?",
    options: {
      A: "Tell the patient that only the doctor can make that decision",
      B: "Respect the decision, explore the patient's concerns and inform the prescriber",
      C: "Offer the patient money to continue taking the medication"
    },
    correctAnswer: "B",
    rationaleCorrect: "Correct. The nurse should assess the reasons for refusal, correct misunderstandings, explain likely consequences, respect the informed decision, notify the prescriber and document the refusal.",
    rationalesIncorrect: {
      A: "The prescriber recommends treatment, but a competent and informed adult has the right to accept or refuse it. The doctor cannot simply override a valid refusal.",
      C: "Offering money is an inappropriate inducement that undermines voluntary decision-making and the ethical principle of autonomy."
    }
  },

  {
    number: 50,
    question: "Persistent, clinically significant distress associated with incongruence between a person's experienced gender and assigned sex is known as:",
    options: {
      A: "Gender role",
      B: "Gender identity",
      C: "Gender dysphoria"
    },
    correctAnswer: "C",
    rationaleCorrect: "Correct. Gender dysphoria refers to clinically significant distress or impaired functioning associated with gender incongruence. Not all transgender or gender-diverse people experience it.",
    rationalesIncorrect: {
      A: "Gender role refers to social and cultural expectations about behaviours or responsibilities associated with gender; it does not mean clinically significant distress.",
      B: "Gender identity is a person's internal sense of gender. Having a particular gender identity is not itself an illness and does not necessarily involve distress."
    }
  }
];

if (typeof window !== "undefined") {
  window.questions = questions;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = questions;
}
