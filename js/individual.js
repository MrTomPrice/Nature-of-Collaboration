$(document).ready(function() {
            mono();
            titles();

            $('#mono').on('click', function(event) {
                mono();
            });
            $('#multi').on('click', function(event) {
                multi();
            });
            $('#inter').on('click', function(event) {
                inter();
            });
            $('#trans').on('click', function(event) {
                trans();
            });
        });

function deletePop() {
    $('#DCpop').popover('destroy');
    $('#TPpop').popover('destroy');
    $('#CUpop').popover('destroy');
    $('#CSpop').popover('destroy');
    $('#ATpop').popover('destroy');
    $('#UPpop').popover('destroy');
    $('#UMpop').popover('destroy');
    $('#ISpop').popover('destroy');
    $('#UApop').popover('destroy');
    $('#DGpop').popover('destroy');
    $('#DNIBpop').popover('destroy');
    $('#IVpop').popover('destroy');
    $('#ISkpop').popover('destroy');
    $('#PCEpop').popover('destroy');
    $('#WTRpop').popover('destroy');
    $('#Cmpop').popover('destroy');
}

function titles() {
    $('#DCpop').attr('data-original-title', "Extent to which individuals need the knowledge and skills necessary to conduct research within a particular disciplinary tradition.");
    $('#TPpop').attr('data-original-title', "A commitment to openness, tolerance, and respect for other perspectives.");
    $('#CUpop').attr('data-original-title', "Comfort with Uncertainty.");
    $('#CSpop').attr('data-original-title', "The capacity to communicate and facilitate knowledge transfer between specialists and non-specialists.");
    $('#ATpop').attr('data-original-title', "One's ability to trust in others and the process.");
    $('#UPpop').attr('data-original-title', "Having an appreciation of the philosophical paradigms of their own and other's disciplines.");
    $('#UMpop').attr('data-original-title', "Having an appreciation of the values and limitations of methods in different disciplines.");
    $('#ISpop').attr('data-original-title', "The ability to see patterns, make connections, think holistically, and see different perspectives. ");
    $('#UApop').attr('data-original-title', "The ability to appreciate how knowledge created will be applied in a local context.");
    $('#DGpop').attr('data-original-title', "The capacity to learn and question one's own assumptions and presuppositions. ");
    $('#DNIBpop').attr('data-original-title', "The willingness to devote significant time to navigating conflict and interpersonal barriers and establishing team cohesion");
    $('#IVpop').attr('data-original-title', "One's intrinsic investment in the problem and the search for its solution.");
    $('#ISkpop').attr('data-original-title', "The extent to which institution supports researcher to do some form of cross-disciplinary collaboration.");
    $('#PCEpop').attr('data-original-title', "The extent to which prior cross-disciplinary experience or training is necessary.");
    $('#WTRpop').attr('data-original-title', "Willingness to take risks.");
    $('#Cmpop').attr('data-original-title', "The extent to which individual is easy to get along with and inspires devotion in others.");
}

function mono() {
    deletePop();

    $('.progress .bar.DC').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.DC')));
    $('.progress .bar.TP').attr('data-percentage',   "0").progressbar(checkColour($('.progress .bar.TP')));
    $('.progress .bar.CU').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.CU')));
    $('.progress .bar.CS').attr('data-percentage',   "0").progressbar(checkColour($('.progress .bar.CS')));
    $('.progress .bar.AT').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.AT')));
    $('.progress .bar.UP').attr('data-percentage',   "0").progressbar(checkColour($('.progress .bar.UP')));
    $('.progress .bar.UM').attr('data-percentage',   "0").progressbar(checkColour($('.progress .bar.UM')));
    $('.progress .bar.IS').attr('data-percentage',   "0").progressbar(checkColour($('.progress .bar.IS')));
    $('.progress .bar.UA').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.UA')));
    $('.progress .bar.DG').attr('data-percentage',   "0").progressbar(checkColour($('.progress .bar.DG')));
    $('.progress .bar.DNIB').attr('data-percentage',"33").progressbar(checkColour($('.progress .bar.DNIB')));
    $('.progress .bar.IV').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.IV')));
    $('.progress .bar.ISk').attr('data-percentage',   "0").progressbar(checkColour($('.progress .bar.ISk')));
    $('.progress .bar.PCE').attr('data-percentage',  "0").progressbar(checkColour($('.progress .bar.PCE')));
    $('.progress .bar.WTR').attr('data-percentage', "33").progressbar(checkColour($('.progress .bar.WTR')));
    $('.progress .bar.Cm').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.Cm')));

    $('#DCpop').attr('data-content', "One must be a good researcher and understand the paradigms and methodologies of one's own discipline.");
    $('#TPpop').attr('data-content', "Researchers do not work with individuals from other disciplines, and as such collaboration does not require an openness or tolerance for other disciplinary perspectives. ");
    $('#CUpop').attr('data-content', "Research process is relatively consistent from context to context. As such researchers may not need to be comfortable with high levels of uncertainty.");
    $('#CSpop').attr('data-content', "Researchers work with individuals who share their disciplinary framework, and as such do not need to be able to be able to communicate or interpret knowledge between specialists and non-specialists.");
    $('#ATpop').attr('data-content', "Researchers have a firm understanding of the conceptual frameworks of their collaborators and do not have to rely on them in the same way that they do in Multi, Inter or Transdisciplinary Collaboration. As such trust may or may not be an important factor in any given Monodisciplinary research project.");
    $('#UPpop').attr('data-content', "Research can be conducted by following disciplinary methodologies, and does not generally require a strong understanding of the philosophical assumptions which underpin those assumptions. \"Philosophical differences are rooted in fundamental research concepts that are not often contemplated or discussed\". (http://www.cals.uidaho.edu/toolbox/concept.asp) ");
    $('#UMpop').attr('data-content', "Researchers do not work with individuals from other disciplines, and as such do not generally need to understand the values and limitations of discipline-specific methodologies other than their own.");
    $('#ISpop').attr('data-content', "Researchers are not working with other disciplines, and as such there is no cross-disciplinary integration to be done. ");
    $('#UApop').attr('data-content', "Researchers do not necessarily need to consider the application of the knowledge they generate.");
    $('#DGpop').attr('data-content', "Researchers can work within the disciplinary frameworks they are familiar with, and are not necessarily required to question their own assumptions. ");
    $('#DNIBpop').attr('data-content', "Few of the barriers inherent to epistemologically diverse teams are impediments to these collaborations. Researchers may not necessarily need to spend significant time and effort navigating interpersonal barriers");
    $('#IVpop').attr('data-content', "Intrinsic motivation to solve research problem may or may not be a significant factor in researcher's capacity to participate constructively to team collaboration ");
    $('#ISkpop').attr('data-content', "Institutions traditionally support mono-disciplinary work.");
    $('#PCEpop').attr('data-content', "While potentially beneficial, experience outside of one's home discipline is not necessary for this type of work. ");
    $('#WTRpop').attr('data-content', "Risk taking may or may not be an important aspect of any given research project");
    $('#Cmpop').attr('data-content', "Members of Monodisciplinary Collaborations are typically like minded with similar experiences. Furthermore, researchers can work individually for large parts of the process. As such being easy to get along with may not be a crucial characteristic of team members. ");

    $('.popoverData').popover({ trigger: "hover" });

    $('#mono').removeClass('clicked');
    $('#multi').removeClass('clicked');
    $('#inter').removeClass('clicked');
    $('#trans').removeClass('clicked');
    $('#mono').addClass('clicked');
}

function multi() {
    deletePop();

    $('.progress .bar.DC').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.DC')));
    $('.progress .bar.TP').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.TP')));
    $('.progress .bar.CU').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.CU')));
    $('.progress .bar.CS').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.CS')));
    $('.progress .bar.AT').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.AT')));
    $('.progress .bar.UP').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.UP')));
    $('.progress .bar.UM').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.UM')));
    $('.progress .bar.IS').attr('data-percentage',   "0").progressbar(checkColour($('.progress .bar.IS')));
    $('.progress .bar.UA').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.UA')));
    $('.progress .bar.DG').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.DG')));
    $('.progress .bar.DNIB').attr('data-percentage',"33").progressbar(checkColour($('.progress .bar.DNIB')));
    $('.progress .bar.IV').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.IV')));
    $('.progress .bar.ISk').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.ISk')));
    $('.progress .bar.PCE').attr('data-percentage', "33").progressbar(checkColour($('.progress .bar.PCE')));
    $('.progress .bar.WTR').attr('data-percentage', "33").progressbar(checkColour($('.progress .bar.WTR')));
    $('.progress .bar.Cm').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.Cm')));

    $('#DCpop').attr('data-content', "One of the greatest qualities a team member can bring to the table is a high degree of expertise in their discipline and a strong set of experiences in it. Credibility as a research scientist is also important. (Pellmar and Eisenberg) ");
    $('#TPpop').attr('data-content', "Team members need to tolerate other perspectives, but work almost exclusively on interpreting the system from their own disciplinary framework. As such team members do not necessarily require a comprehensive openness to understanding other disciplinary perspectives.");
    $('#CUpop').attr('data-content', "Research process is relatively consistent from context to context. As such researchers may not need to be comfortable with high levels of uncertainty.");
    $('#CSpop').attr('data-content', "Researchers work almost exclusively on interpreting the systems from their own disciplinary framework. Communication is needed at some point to compare and contrast diverse interpretations of the system but may not be integral to the majority of the research process.");
    $('#ATpop').attr('data-content', "Team members with different disciplinary backgrounds require trust between one another. The difference in backgrounds between members means that the expertise required to analyze the work of other members is outside of one's own field. (Pellmar and Eisenberg)");
    $('#UPpop').attr('data-content', "Little knowledge is required of the underpinnings of other disciplines. It can be beneficial for team leaders to have a familiarity with the specializations and disciplinary paradigms of members.  (Klein 2005)");
    $('#UMpop').attr('data-content', "Understanding and appreciation of the value and limitations of the methods in their and other disciplines is important. (Pellmar and Eisenberg) ");
    $('#ISpop').attr('data-content', "Integration is not normally a component outlined in the evaluative portion of Monodisciplinary Collaboration. Team members may not need integrative skills.");
    $('#UApop').attr('data-content', "Researchers do not necessarily need to consider the application of the knowledge they generate.");
    $('#DGpop').attr('data-content', "One must learn from others and be tolerant of other perspectives on what you are studying. Understanding and appreciation is beneficial to the process. (Pellmar and Eisenberg)");
    $('#DNIBpop').attr('data-content', "For effective collaboration to take place it is important that a mutual understanding of the differences between disciplines is forged amongst team members. (Pellmar and Eisenberg)");
    $('#IVpop').attr('data-content', "Intrinsic motivation to solve research problem may or may not be a significant factor in researcher's capacity to participate constructively to team collaboration.");
    $('#ISkpop').attr('data-content', "Projects which span disciplines often run into institutional barriers that usually revolve around funding and tradition. Institutional support and funding can significantly benefit this type of work. (Tuana)");
    $('PCEpop').attr('data-content', "Understanding and appreciation of the values and limitations of other disciplines and their methods is a key component of successful interdisciplinary collaborations. (Pellmar and Eisenberg)");
    $('#WTRpop').attr('data-content', "Risk taking may or may not be an important aspect of any given research project.");
    $('#Cmpop').attr('data-content', "Researchers can work individually for large parts of the process. As such being easy to get along with may not be a crucial characteristic of team members. ");

    $('.popoverData').popover({ trigger: "hover" });

    $('#mono').removeClass('clicked');
    $('#multi').removeClass('clicked');
    $('#inter').removeClass('clicked');
    $('#trans').removeClass('clicked');
    $('#multi').addClass('clicked');
}

function inter() {
    deletePop();

    $('.progress .bar.DC').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.DC')));
    $('.progress .bar.TP').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.TP')));
    $('.progress .bar.CU').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.CU')));
    $('.progress .bar.CS').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.CS')));
    $('.progress .bar.AT').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.AT')));
    $('.progress .bar.UP').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.UP')));
    $('.progress .bar.UM').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.UM')));
    $('.progress .bar.IS').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.IS')));
    $('.progress .bar.UA').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.UA')));
    $('.progress .bar.DG').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.DG')));
    $('.progress .bar.DNIB').attr('data-percentage',"66").progressbar(checkColour($('.progress .bar.DNIB')));
    $('.progress .bar.IV').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.IV')));
    $('.progress .bar.ISk').attr('data-percentage', "66").progressbar(checkColour($('.progress .bar.ISk')));
    $('.progress .bar.PCE').attr('data-percentage', "66").progressbar(checkColour($('.progress .bar.PCE')));
    $('.progress .bar.WTR').attr('data-percentage',"100").progressbar(checkColour($('.progress .bar.WTR')));
    $('.progress .bar.Cm').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.Cm')));
    
    $('#DCpop').attr('data-content', "Team members must have both a breadth and depth of disciplinary knowledge. Striving for balance among disciplinary perspectives necessitates a deep understanding of disciplines in order to be able to integrate them. (Repko)");
    $('#TPpop').attr('data-content', "Team members must be able to see how insights from multiple disciplines relate to one another and to the teams focus or research question. (Repko)");
    $('#CUpop').attr('data-content', "Team members need to be comfortable with the uncertainty concerning what kind of conceptual framework will be generated to investigate the research problem Team members also must be willing to take risks as part of collaborations of this type. (Klein 2005)");
    $('#CSpop').attr('data-content', "Understanding of jargon is necessary to move past the communication barriers which come about when working in diverse teams. Team members must be aware of what they do and do not understand. (Pellmar and Eisenberg)");
    $('#ATpop').attr('data-content', "Trust in other team members is a cornerstone of interdisciplinary work. It allows for a collaborative and consultive environment with mutual granting of power and the surrendering of control of one's own discipline. (Klein 2005)");
    $('#UPpop').attr('data-content', "There must be a willingness to look past preconceived notions and appreciate the philosophical paradigms of others' disciplines as well as their own. (Klein 2005)");
    $('#UMpop').attr('data-content', "Understanding the methodologies of other disciplines is likely an integral aspect to the creation of new methodological frameworks with which to study the research topic.");
    $('#ISpop').attr('data-content', "Participants must have strengths in integrative skills to bridge new gaps and forge new knowledge from the synthesis of disciplines. (Klein 2005) Participants need skills in perspective taking and holistic thinking. (Mathews, Repko)");
    $('#UApop').attr('data-content', "Researchers do not necessarily need to consider the application of the knowledge they generate");
    $('#DGpop').attr('data-content', "Team members must reflect on their own biases, both disciplinary and personal. This naturally pushes them to expand their intellectual horizons. (Repko)");
    $('#DNIBpop').attr('data-content', "Challenges are abundant when trying to break through jargon. One must also have the ability to step back and realize when they do not actually understand what they may have thought they did. (Pellmar and Eisenberg)");
    $('#IVpop').attr('data-content', "Intrinsic motivation to solve research problem may or may not be a significant factor in researcher's capacity to participate constructively to team collaboration. ");
    $('#ISkpop').attr('data-content', "Projects which span disciplines often run into institutional barriers that usually revolve around funding and tradition. Institutional support and funding can significantly benefit this type of work. (Tuana)");
    $('#PCEpop').attr('data-content', "Integrating relevant disciplinary elements and resolving disciplinary conflicts requires skills in using appropriate integrative techniques to create or discover common ground. (Repko)");
    $('#WTRpop').attr('data-content', "All team members must be open to taking risks. This is necessary for the successful amalgamation of dissimilar thoughts, perspectives, and concepts in a non-traditional way. (Klein 2005, Bronstein)");
    $('#Cmpop').attr('data-content', "Team members come from a variety of often dissimilar backgrounds. Members must be skilled in working with others and inspiring respect to encourage a positive quality of communication. (Bronstein)");

    $('.popoverData').popover({ trigger: "hover" });

    $('#mono').removeClass('clicked');
    $('#multi').removeClass('clicked');
    $('#inter').removeClass('clicked');
    $('#trans').removeClass('clicked');
    $('#inter').addClass('clicked');
}

function trans() {
    deletePop();

    $('.progress .bar.DC').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.DC')));
    $('.progress .bar.TP').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.TP')));
    $('.progress .bar.CU').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.CU')));
    $('.progress .bar.CS').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.CS')));
    $('.progress .bar.AT').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.AT')));
    $('.progress .bar.UP').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.UP')));
    $('.progress .bar.UM').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.UM')));
    $('.progress .bar.IS').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.IS')));
    $('.progress .bar.UA').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.UA')));
    $('.progress .bar.DG').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.DG')));
    $('.progress .bar.DNIB').attr('data-percentage',"100").progressbar(checkColour($('.progress .bar.DNIB')));
    $('.progress .bar.IV').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.IV')));
    $('.progress .bar.ISk').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.ISk')));
    $('.progress .bar.PCE').attr('data-percentage',"100").progressbar(checkColour($('.progress .bar.PCE')));
    $('.progress .bar.WTR').attr('data-percentage',"100").progressbar(checkColour($('.progress .bar.WTR')));
    $('.progress .bar.Cm').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.Cm')));
    
    $('#DCpop').attr('data-content', "Some participants of Transdisciplianry Collaborations are non-academics (practitioners or government representatives). Thus it is unreasonable to assume that all team members will demonstrate disciplinary competence.");
    $('#TPpop').attr('data-content', "Trans-disciplinary teams require an ethic of resolute openness, tolerance, and respect toward perspectives different from one's own. Rarely are these abilities inherent. (International Center for Transdisciplinary Research; Russell; Stokols)");
    $('#CUpop').attr('data-content', "Team members need to be comfortable with the uncertainty concerning what kind of conceptual framework will be generated to investigate the research problem and how intervention in the system under investigation will affect the research process. Team members also must be willing to take risks as part of collaborations of this type. (Klein 2005) ");
    $('#CSpop').attr('data-content', "Team members must have well developed communication skills and an understanding of different terminologies and key concepts associated with their and other's disciplinary frameworks. (Ebersoehn)");
    $('#ATpop').attr('data-content', "A clarity around shared and individual goals along with appropriate expectations for team cooperation and harmony breads a necessary environment of trust amongst members. (Stokols)");
    $('#UPpop').attr('data-content', "The relationships between paradigms and values of different disciplines must be understood, and conflicts if not entirely resolved must be negotiated and understood. (Stokols)");
    $('#UMpop').attr('data-content', "Understanding different terminologies and relevant concepts for multiple disciplines is essential to facilitate transdisciplinary collaboration, especially in the collaborations involving non-traditional experts. In this case being able to access and engage with local community is important. (Ebersoehn)");
    $('#ISpop').attr('data-content', "Participants must have strengths in integrative skills to bridge new gaps and forge new knowledge from the synthesis of disciplines. (Klein 2005) Participants need skills in perspective taking and holistic thinking. (Mathews, Repko). Participants must also be able to integrate academic knowledge with practitioner-based knowledge of the local context and how knowledge might be implemented in order to create some transformation in the system under investigation.");
    $('#UApop').attr('data-content', "The purpose of the collaboration is to translate research findings into real-world problem-solving strategies (Stokols). As such, researchers only create knowledge insofar as they have reason to believe that that knowledge can lead to tangible intervention in the system being studied.");
    $('#DGpop').attr('data-content', "Transdisciplinary teams require an ethic of resolute openness, tolerance, and respect toward perspectives different from one's own. (Stokols) Team members must reflect on their own biases, both disciplinary and personal. This naturally pushes them to expand their intellectual horizons. (Repko)");
    $('#DNIBpop').attr('data-content', "Participants must \"be willing to devote substantial amounts of time toward cultivating \"common ground\" at both intellectual and social levels ... over the course of their projects\" Awareness of the \"constraints and tensions [collaborators] are likely to encounter as they work together over several months or years\" is vital. (Stokols)");
    $('#IVpop').attr('data-content', "Tensions and conflict are endemic to large-scale trans-disciplinary projects and team member must be able to constructively navigate it. A strong commitment to the project and its goals is an essential component of a successful collaboration. (Ebersoehn, Stokols)");
    $('#ISkpop').attr('data-content', "Institutions can have a considerable impact on the success of trans-disciplinary work. Specifically, transdisciplinary research depends on \"the presence or absence of institutional supports for inter-departmental and cross-disciplinary collaboration.\" (Stokols)");
    $('#PCEpop').attr('data-content', "Pre-collaboration training and preparation are key strategies for increasing the likelihood of longer term success. (Stokols)");
    $('#WTRpop').attr('data-content', "Like interdisciplinary work transdisciplinary work has many risks. Participants should be prepared in advance for the nature of this collaboration. (Stokols)");
    $('#Cmpop').attr('data-content', "Team members come from a variety of often dissimilar backgrounds. Members must be skilled in working with others and inspiring respect to encourage a positive quality of communication. (Bronstein)");

    $('.popoverData').popover({ trigger: "hover" });

    $('#mono').removeClass('clicked');
    $('#multi').removeClass('clicked');
    $('#inter').removeClass('clicked');
    $('#trans').removeClass('clicked');
    $('#trans').addClass('clicked');
}

function checkColour(bar){
    var percent =parseInt($(bar).attr('data-percentage'));
    $(bar).removeClass('bar-none').removeClass('bar-high').removeClass('bar-low').removeClass('bar-medium');
    if(percent < 1){
        $(bar).addClass('bar-none');
    }else if(percent < 34){
        $(bar).addClass('bar-low');
    } else if(percent < 67){
        $(bar).addClass('bar-medium');
    } else {
        $(bar).addClass('bar-high');
    }}