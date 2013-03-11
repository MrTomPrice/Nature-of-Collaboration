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
    $('#Inpop').popover('destroy');
    $('#TPpop').popover('destroy');
    $('#SGpop').popover('destroy');
    $('#FSpop').popover('destroy');
    $('#DIPpop').popover('destroy');
    $('#DCPpop').popover('destroy');
    $('#PVPpop').popover('destroy');
    $('#FBpop').popover('destroy');
    $('#DTMBpop').popover('destroy');
    $('#VDSpop').popover('destroy');
}

function titles() {
    $('#Inpop').attr('data-original-title', "The extent to which intervention in the system being studied is considered when generating knowledge of that system. ");
    $('#TPpop').attr('data-original-title', "The extent to which the research process is tailored to each research context.");
    $('#SGpop').attr('data-original-title', "The extent to which group goals and individual discipline-specific goals are complementary.");
    $('#FSpop').attr('data-original-title', "The extent to which a focus on the disciplinary lens takes priority over a focus on the research problem.");
    $('#DIPpop').attr('data-original-title', "Degree of Innovation in the Process");
    $('#DCPpop').attr('data-original-title', "The extent to which conflict is inherent in the process.");
    $('#PVPpop').attr('data-original-title', "The extent to which human values are implicit in the research process.");
    $('#FBpop').attr('data-original-title', "The extent to which the boundaries of inquiry surrounding research problem are flexible.");
    $('#DTMBpop').attr('data-original-title', "Diversity of Team members' backgrounds.");
    $('#VDSpop').attr('data-original-title', "The extent to which determinants to success vary from context to context.");
}

function mono() {
    deletePop();

    $('.progress .bar.In').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.In')));
    $('.progress .bar.TP').attr('data-percentage',   "0").progressbar(checkColour($('.progress .bar.TP')));
    $('.progress .bar.SG').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.SG')));
    $('.progress .bar.FS').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.FS')));
    $('.progress .bar.DIP').attr('data-percentage', "33").progressbar(checkColour($('.progress .bar.DIP')));
    $('.progress .bar.DCP').attr('data-percentage',  "0").progressbar(checkColour($('.progress .bar.DCP')));
    $('.progress .bar.PVP').attr('data-percentage', "33").progressbar(checkColour($('.progress .bar.PVP')));
    $('.progress .bar.FB').attr('data-percentage',   "0").progressbar(checkColour($('.progress .bar.FB')));
    $('.progress .bar.DTMB').attr('data-percentage', "0").progressbar(checkColour($('.progress .bar.DTMB')));
    $('.progress .bar.VDS').attr('data-percentage',  "0").progressbar(checkColour($('.progress .bar.VDS')));
    
    $('#Inpop').attr('data-content', "Intervention in the system being studied may or may not be an application of the knowledge being produced, and may or may not be a consideration during the production of knowledge.");    
    $('#TPpop').attr('data-content', "Standard research processes can be applied in all cases.");
    $('#SGpop').attr('data-content', "Group goals and Individual goals are highly complementary. The traditional Academic reward structure enables either to be attained through achieving the other (Richardson).");
    $('#FSpop').attr('data-content', "Research problem is defined by the disciplinary framework used to investigate that problem.");
    $('#DIPpop').attr('data-content', "There may or may not be innovation in the generation of knowledge through an existing disciplinary framework.");
    $('#DCPpop').attr('data-content', "There are minimal methodological or philosophical differences between researchers, as researchers share a common disciplinary framework. As such conflict is not inherent to the process.");
    $('#PVPpop').attr('data-content', "Personal values may or may not have an influence on a research process which conforms to a traditional disciplinary framework.");
    $('#FBpop').attr('data-content', "A single disciplinary framework should consider a consistent set of components and interactions when studying a system. As such the boundaries of the system should remain relatively static.");
    $('#DTMBpop').attr('data-content', "Team members all hail from the same academic discipline.");
    $('#VDSpop').attr('data-content', "Determinants to success are relatively consistent across contexts.");

    $('.popoverData').popover({ trigger: "hover" });

    $('#mono').removeClass('clicked');
    $('#multi').removeClass('clicked');
    $('#inter').removeClass('clicked');
    $('#trans').removeClass('clicked');
    $('#mono').addClass('clicked');
}

function multi() {
    deletePop();

    $('.progress .bar.In').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.In')));
    $('.progress .bar.TP').attr('data-percentage',   "0").progressbar(checkColour($('.progress .bar.TP')));
    $('.progress .bar.SG').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.SG')));
    $('.progress .bar.FS').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.FS')));
    $('.progress .bar.DIP').attr('data-percentage', "33").progressbar(checkColour($('.progress .bar.DIP')));
    $('.progress .bar.DCP').attr('data-percentage', "33").progressbar(checkColour($('.progress .bar.DCP')));
    $('.progress .bar.PVP').attr('data-percentage', "33").progressbar(checkColour($('.progress .bar.PVP')));
    $('.progress .bar.FB').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.FB')));
    $('.progress .bar.DTMB').attr('data-percentage',"66").progressbar(checkColour($('.progress .bar.DTMB')));
    $('.progress .bar.VDS').attr('data-percentage', "33").progressbar(checkColour($('.progress .bar.VDS')));
    
    $('#Inpop').attr('data-content', "Intervention in the system being studied may or may not be an application of the knowledge being produced, and may or may not be a consideration during the production of knowledge.");    
    $('#TPpop').attr('data-content', "Standard research processes can be applied in all cases. Researchers consistently work sequentially from a disciplinary-specific base to investigate a common problems (Ebersoehn).");
    $('#SGpop').attr('data-content', "There is some overlap between group goals and Individual goals, however the juxtaposition of different disciplinary interpretations of the system being studied may not contribute to individual discipline-specific goals. ");
    $('#FSpop').attr('data-content', "Research problem is defined by multiple disciplinary frameworks, allowing for a multifaceted, yet disciplinary-focused, understanding of system under investigation.");
    $('#DIPpop').attr('data-content', "There may or may not be innovation in the process of juxtaposing disciplinary interpretations of the system being studied.");
    $('#DCPpop').attr('data-content', "Divergent interpretations of the system being studied may lead to conflict between researchers. However, researchers can do much of their work individually, often working sequentially rather than in coherence with one another (Ebersoehn), mitigating the level of conflict inherent to the overall process.");
    $('#PVPpop').attr('data-content', "Personal values may or may not have an impact on the juxtaposition of different disciplinary interpretations of the system being studied. ");
    $('#FBpop').attr('data-content', "Different disciplinary frameworks might consider different sets of components and interactions when investigating the same system.");
    $('#DTMBpop').attr('data-content', "Team composed of experts from different disciplinary backgrounds.");
    $('#VDSpop').attr('data-content', "Determinants to success may vary from context to context, depending on the nature of the academic disciplines involved.");

    $('.popoverData').popover({ trigger: "hover" });

    $('#mono').removeClass('clicked');
    $('#multi').removeClass('clicked');
    $('#inter').removeClass('clicked');
    $('#trans').removeClass('clicked');
    $('#multi').addClass('clicked');
}

function inter() {
    deletePop();

    $('.progress .bar.In').attr('data-percentage',   "33").progressbar(checkColour($('.progress .bar.In')));
    $('.progress .bar.TP').attr('data-percentage',   "33").progressbar(checkColour($('.progress .bar.TP')));
    $('.progress .bar.SG').attr('data-percentage',   "33").progressbar(checkColour($('.progress .bar.SG')));
    $('.progress .bar.FS').attr('data-percentage',   "33").progressbar(checkColour($('.progress .bar.FS')));
    $('.progress .bar.DIP').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.DIP')));
    $('.progress .bar.DCP').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.DCP')));
    $('.progress .bar.PVP').attr('data-percentage',  "66").progressbar(checkColour($('.progress .bar.PVP')));
    $('.progress .bar.FB').attr('data-percentage',   "33").progressbar(checkColour($('.progress .bar.FB')));
    $('.progress .bar.DTMB').attr('data-percentage', "66").progressbar(checkColour($('.progress .bar.DTMB')));
    $('.progress .bar.VDS').attr('data-percentage',  "33").progressbar(checkColour($('.progress .bar.VDS')));
    
    $('#Inpop').attr('data-content', "Intervention in the system being studied may or may not be an application of the knowledge being produced, and may or may not be a consideration during the production of knowledge.");    
    $('#TPpop').attr('data-content', "Standard research process can be applied in most contexts. Some cases may vary depending on the nature of the new conceptual tools that are produced to study the research problem.");
    $('#SGpop').attr('data-content', "Group goals entail creation of knowledge through new conceptual frameworks (Repko), and may not be complementary of individual discipline-specific goals.");
    $('#FSpop').attr('data-content', "Disciplines are used to construct new frameworks with which to better understand the system, however researchers still work from a disciplinary-specific base to address the common problem (Mathews).");
    $('#DIPpop').attr('data-content', "Knowledge is produced through a process of integrating disciplinary insights through the generation of new conceptual frameworks to understand the problem (Mathews).");
    $('#DCPpop').attr('data-content', "Disparities between researchers from different disciplines can cause conflict which the group must expend energy to overcome (Carla).");
    $('#PVPpop').attr('data-content', "Human values are inherent in creating new conceptual frameworks with which to generate interpretations of the system, as well as in determining the boundaries of the system (Stokols).");
    $('#FBpop').attr('data-content', "Different disciplinary frameworks might consider different sets of components and interactions when investigating the same system.");
    $('#DTMBpop').attr('data-content', "Team composed of experts from different disciplinary backgrounds. \"The number of disciplines and distance between these disciplines is great\" (Nissani).");
    $('#VDSpop').attr('data-content', "Determinants to success may vary from context to context, depending on the nature of the academic disciplines involved and the conceptual tools that are created to generate knowledge of the system being studied. ");

    $('.popoverData').popover({ trigger: "hover" });

    $('#mono').removeClass('clicked');
    $('#multi').removeClass('clicked');
    $('#inter').removeClass('clicked');
    $('#trans').removeClass('clicked');
    $('#inter').addClass('clicked');
}

function trans() {
    deletePop();

    $('.progress .bar.In').attr('data-percentage',  "100").progressbar(checkColour($('.progress .bar.In')));
    $('.progress .bar.TP').attr('data-percentage',  "100").progressbar(checkColour($('.progress .bar.TP')));
    $('.progress .bar.SG').attr('data-percentage',   "33").progressbar(checkColour($('.progress .bar.SG')));
    $('.progress .bar.FS').attr('data-percentage',   "33").progressbar(checkColour($('.progress .bar.FS')));
    $('.progress .bar.DIP').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.DIP')));
    $('.progress .bar.DCP').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.DCP')));
    $('.progress .bar.PVP').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.PVP')));
    $('.progress .bar.FB').attr('data-percentage',  "100").progressbar(checkColour($('.progress .bar.FB')));
    $('.progress .bar.DTMB').attr('data-percentage',"100").progressbar(checkColour($('.progress .bar.DTMB')));
    $('.progress .bar.VDS').attr('data-percentage', "100").progressbar(checkColour($('.progress .bar.VDS')));
    
    $('#Inpop').attr('data-content', "The very purpose of the collaboration is to translate research findings into real world problem-solving strategies (Stokols). As such the capacity to implement research findings is fundamental to the kind of knowledge that is produced. ");    
    $('#TPpop').attr('data-content', "Each research process is highly customized, based on the nature of the intended intervention. Furthermore, Transdisciplinary Collaborations can take on different forms, each requiring different approaches. Examples of the different kinds of Transdisciplinary Collaboration include those involving primarily scientific collaborations, community problem-solving coalitions, and inter-sectoral partnerships among government agencies, universities, and community organizations\" (Stokols).");
    $('#SGpop').attr('data-content', "Group goals entail the creation of knowledge through new conceptual framework, and focus on translating those knowledge products into community problem-solving strategies. Individual disciplinary-specific goals may not be complementary or even compatible with the group's intention to intervene in some real world system. (Stokols).");
    $('#FSpop').attr('data-content', "Disciplinary lenses are one of many perspectives used to form new interpretations of the research problem and how interventions might be carried out (Stokols).");
    $('#DIPpop').attr('data-content', "Necessitates the development of new conceptual models and research methodologies, as well as the application of knowledge to a local context in order to design innovative solutions to some community problem (Stokols).");
    $('#DCPpop').attr('data-content', "Process often evokes tension and conflict among participants because of divergence in  disciplinary world views, interpersonal styles, departmental affiliations, and philosophical assumptions about the nature of knowledge being produced and the processes for the production of that knowledge. Transdisciplinary collaboration has \"the same, if not greater potential for generating misunderstandings, disagreements, and fragmentation among team members as do [collaborations] involving researchers only\" (Stokols).");
    $('#PVPpop').attr('data-content', "Human values & moral decision making is inherent in the production of knowledge (Midgley), in determining how to intervene in the system, as well as in determining the boundaries of the system (Stokols).");
    $('#FBpop').attr('data-content', "Boundaries around the system being studied are determined by the nature of the intervention being proposed and by the values of researchers (Midgley), and are thus highly flexible.");
    $('#DTMBpop').attr('data-content', "Teams are composed of scholars from different disciplines, practitioners, and government representatives, resulting in \"kaleidoscope of personalities, function, roles, and expertise (Ebersoehn, Stokols).");
    $('#VDSpop').attr('data-content', "The factors which enable effective transdisciplinary collaboration may vary from context to context, depending on the nature of the process, the participants involved, and nature of the desired intervention (Stokols).");

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