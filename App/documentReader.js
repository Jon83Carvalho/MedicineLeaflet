import { XMLValidator } from 'fast-xml-parser';
import { XMLParser } from 'fast-xml-parser';
import { readFileSync } from 'fs';
import { flatten } from 'flat'


export function documentReader () {

const xmlFile = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet href="https://www.accessdata.fda.gov/spl/stylesheet/spl.xsl" type="text/xsl"?>
<document xmlns="urn:hl7-org:v3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:hl7-org:v3 https://www.accessdata.fda.gov/spl/schema/spl.xsd">
    <id root="9ce1b515-8804-4e81-92f0-1e66ad327ee6"/>
    <code code="34391-3" codeSystem="2.16.840.1.113883.6.1" displayName="HUMAN PRESCRIPTION DRUG LABEL"/>
    <title>
        <content styleCode="bold">Dexamethasone Tablets, USP</content>
        <br/>
        <content styleCode="bold">(4 mg and 6 mg)</content>
        <br/>
        <content styleCode="bold">Rx Only</content>
    </title>
    <effectiveTime value="20240702"/>
    <setId root="64b46398-9b97-45e8-b1ba-1a202d574448"/>
    <versionNumber value="2"/>
    <author>
        <time/>
        <assignedEntity>
            <representedOrganization>
                <id extension="191427277" root="1.3.6.1.4.1.519.1"/>
                <name>Major Pharmaceuticals</name>
                <assignedEntity>
                    <assignedOrganization/>
                </assignedEntity>
            </representedOrganization>
        </assignedEntity>
    </author>
    <component>
        <structuredBody>
            <component>
                <section>
                    <id root="e64cbafb-22eb-413e-ab4e-6c16c2b5ad73"/>
                    <code code="48780-1" codeSystem="2.16.840.1.113883.6.1" displayName="SPL product data elements section"/>
                    <effectiveTime value="20240702"/>
                    <subject>
                        <manufacturedProduct>
                            <manufacturedProduct>
                                <code code="0904-7266" codeSystem="2.16.840.1.113883.6.69"/>
                                <name>dexamethasone</name>
                                <formCode code="C42998" codeSystem="2.16.840.1.113883.3.26.1.1" displayName="TABLET"/>
                                <asEntityWithGeneric>
                                    <genericMedicine>
                                        <name>dexamethasone</name>
                                    </genericMedicine>
                                </asEntityWithGeneric>
                                <asEquivalentEntity classCode="EQUIV">
                                    <code code="C64637" codeSystem="2.16.840.1.113883.3.26.1.1"/>
                                    <definingMaterialKind>
                                        <code code="60219-2043" codeSystem="2.16.840.1.113883.6.69"/>
                                    </definingMaterialKind>
                                </asEquivalentEntity>
                                <ingredient classCode="ACTIB">
                                    <quantity>
                                        <numerator unit="mg" value="4"/>
                                        <denominator unit="1" value="1"/>
                                    </quantity>
                                    <ingredientSubstance>
                                        <code code="7S5I7G3JQL" codeSystem="2.16.840.1.113883.4.9"/>
                                        <name>DEXAMETHASONE</name>
                                        <activeMoiety>
                                            <activeMoiety>
                                                <code code="7S5I7G3JQL" codeSystem="2.16.840.1.113883.4.9"/>
                                                <name>DEXAMETHASONE</name>
                                            </activeMoiety>
                                        </activeMoiety>
                                    </ingredientSubstance>
                                </ingredient>
                                <ingredient classCode="IACT">
                                    <ingredientSubstance>
                                        <code code="O8232NY3SJ" codeSystem="2.16.840.1.113883.4.9"/>
                                        <name>STARCH, CORN</name>
                                    </ingredientSubstance>
                                </ingredient>
                                <ingredient classCode="IACT">
                                    <ingredientSubstance>
                                        <code code="EWQ57Q8I5X" codeSystem="2.16.840.1.113883.4.9"/>
                                        <name>LACTOSE MONOHYDRATE</name>
                                    </ingredientSubstance>
                                </ingredient>
                                <ingredient classCode="IACT">
                                    <ingredientSubstance>
                                        <code code="70097M6I30" codeSystem="2.16.840.1.113883.4.9"/>
                                        <name>MAGNESIUM STEARATE</name>
                                    </ingredientSubstance>
                                </ingredient>
                                <ingredient classCode="IACT">
                                    <ingredientSubstance>
                                        <code code="H8AV0SQX4D" codeSystem="2.16.840.1.113883.4.9"/>
                                        <name>SODIUM STARCH GLYCOLATE TYPE A</name>
                                    </ingredientSubstance>
                                </ingredient>
                                <asContent>
                                    <quantity>
                                        <numerator unit="1" value="1"/>
                                        <denominator value="1"/>
                                    </quantity>
                                    <containerPackagedProduct>
                                        <code/>
                                        <formCode code="C43168" codeSystem="2.16.840.1.113883.3.26.1.1" displayName="BLISTER PACK"/>
                                        <asContent>
                                            <quantity>
                                                <numerator unit="1" value="100"/>
                                                <denominator value="1"/>
                                            </quantity>
                                            <containerPackagedProduct>
                                                <code code="0904-7266-61" codeSystem="2.16.840.1.113883.6.69"/>
                                                <formCode code="C43182" codeSystem="2.16.840.1.113883.3.26.1.1" displayName="CARTON"/>
                                            </containerPackagedProduct>
                                            <subjectOf>
                                                <marketingAct>
                                                    <code code="C53292" codeSystem="2.16.840.1.113883.3.26.1.1"/>
                                                    <statusCode code="active"/>
                                                    <effectiveTime>
                                                        <low value="20221202"/>
                                                    </effectiveTime>
                                                </marketingAct>
                                            </subjectOf>
                                        </asContent>
                                    </containerPackagedProduct>
                                    <subjectOf>
                                        <characteristic>
                                            <code code="SPLCMBPRDTP" codeSystem="2.16.840.1.113883.1.11.19255"/>
                                            <value code="C112160" codeSystem="2.16.840.1.113883.3.26.1.1" displayName="Type 0: Not a Combination Product" xsi:type="CV"/>
                                        </characteristic>
                                    </subjectOf>
                                </asContent>
                            </manufacturedProduct>
                            <subjectOf>
                                <approval>
                                    <id extension="ANDA215106" root="2.16.840.1.113883.3.150"/>
                                    <code code="C73584" codeSystem="2.16.840.1.113883.3.26.1.1" displayName="ANDA"/>
                                    <author>
                                        <territorialAuthority>
                                            <territory>
                                                <code code="USA" codeSystem="2.16.840.1.113883.5.28"/>
                                            </territory>
                                        </territorialAuthority>
                                    </author>
                                </approval>
                            </subjectOf>
                            <subjectOf>
                                <marketingAct>
                                    <code code="C53292" codeSystem="2.16.840.1.113883.3.26.1.1"/>
                                    <statusCode code="active"/>
                                    <effectiveTime>
                                        <low value="20210901"/>
                                    </effectiveTime>
                                </marketingAct>
                            </subjectOf>
                            <subjectOf>
                                <characteristic classCode="OBS">
                                    <code code="SPLCOLOR" codeSystem="2.16.840.1.113883.1.11.19255"/>
                                    <value code="C48325" codeSystem="2.16.840.1.113883.3.26.1.1" displayName="white" xsi:type="CE">
                                        <originalText>white to off-white</originalText>
                                    </value>
                                </characteristic>
                            </subjectOf>
                            <subjectOf>
                                <characteristic classCode="OBS">
                                    <code code="SPLSIZE" codeSystem="2.16.840.1.113883.1.11.19255"/>
                                    <value unit="mm" value="6" xsi:type="PQ"/>
                                </characteristic>
                            </subjectOf>
                            <subjectOf>
                                <characteristic classCode="OBS">
                                    <code code="SPLSHAPE" codeSystem="2.16.840.1.113883.1.11.19255"/>
                                    <value code="C48348" codeSystem="2.16.840.1.113883.3.26.1.1" displayName="ROUND" xsi:type="CE"/>
                                </characteristic>
                            </subjectOf>
                            <subjectOf>
                                <characteristic classCode="OBS">
                                    <code code="SPLSCORE" codeSystem="2.16.840.1.113883.1.11.19255"/>
                                    <value value="2" xsi:type="INT"/>
                                </characteristic>
                            </subjectOf>
                            <subjectOf>
                                <characteristic classCode="OBS">
                                    <code code="SPLIMPRINT" codeSystem="2.16.840.1.113883.1.11.19255"/>
                                    <value xsi:type="ST">E3</value>
                                </characteristic>
                            </subjectOf>
                            <consumedIn>
                                <substanceAdministration>
                                    <routeCode code="C38288" codeSystem="2.16.840.1.113883.3.26.1.1" displayName="ORAL"/>
                                </substanceAdministration>
                            </consumedIn>
                        </manufacturedProduct>
                    </subject>
                </section>
            </component>
            <component>
                <section ID="LINK_92d7a166-a8db-44eb-a714-413b76c9c514">
                    <id root="7446bd66-8a83-4ed0-a2bf-43891a9356bd"/>
                    <code code="34089-3" codeSystem="2.16.840.1.113883.6.1" displayName="DESCRIPTION SECTION"/>
                    <title>DESCRIPTION</title>
                    <text>
                        <paragraph>Dexamethasone Tablets, USP, for oral administration, are supplied in two potencies, 4 mg and 6 mg containing 4 mg and 6 mg of dexamethasone, USP respectively. Inactive ingredients are corn starch, lactose monohydrate, magnesium stearate, pregelatinized starch and sodium starch glycolate type A.</paragraph>
                        <paragraph>The molecular weight for dexamethasone is 392.46 g/mol. It is designated chemically as (11β,16α)-9-fluoro-11,17,21-trihydroxy-16-methylpregna-1,4-diene-3,20-dione. The molecular formula is C
                            <sub>22</sub>H
                            <sub>29</sub>FO
                            <sub>5</sub> and the structural formula is:
                        </paragraph>
                        <renderMultiMedia ID="id315" referencedObject="ID_6c75a130-319f-49d9-8168-f74db65c9bd1"/>
                        <paragraph>Dexamethasone, USP, a synthetic adrenocortical steroid, is a white to practically white crystalline powder. It is stable in air. It is practically insoluble in water. </paragraph>
                        <paragraph>Meets USP Dissolution Test 2.</paragraph>
                    </text>
                    <effectiveTime value="20221201"/>
                    <component>
                        <observationMedia ID="ID_6c75a130-319f-49d9-8168-f74db65c9bd1">
                            <text>struc</text>
                            <value mediaType="image/jpeg" xsi:type="ED">
                                <reference value="dexamethasone-tablets-4-mg-and-6-mg-1.jpg"/>
                            </value>
                        </observationMedia>
                    </component>
                </section>
            </component>
            <component>
                <section ID="LINK_8601e4ea-2ea2-4294-b024-e27df4c3dbcf">
                    <id root="b4622667-ecfb-469a-8540-b7777a595cf5"/>
                    <code code="34090-1" codeSystem="2.16.840.1.113883.6.1" displayName="CLINICAL PHARMACOLOGY SECTION"/>
                    <title>CLINICAL PHARMACOLOGY</title>
                    <text>
                        <paragraph>Glucocorticoids, naturally occurring and synthetic, are adrenocortical steroids that are readily absorbed from the gastrointestinal tract. Glucocorticoids cause varied metabolic effects. In addition, they modify the body's immune responses to diverse stimuli. Naturally occurring glucocorticoids (hydrocortisone and cortisone), which also have sodium-retaining properties, are used as replacement therapy in adrenocortical deficiency states. Their synthetic analogs including dexamethasone are primarily used for their anti-inflammatory effects in disorders of many organ systems. </paragraph>
                        <paragraph>At equipotent anti-inflammatory doses, dexamethasone almost completely lacks the sodium-retaining property of hydrocortisone and closely related derivatives of hydrocortisone. </paragraph>
                    </text>
                    <effectiveTime value="20221201"/>
                </section>
            </component>
            <component>
                <section ID="LINK_1024c95e-ba37-4a0a-a428-9322ac1bc69a">
                    <id root="35dfbb36-4c42-43df-b2e3-ced3c12c5ac4"/>
                    <code code="34067-9" codeSystem="2.16.840.1.113883.6.1" displayName="INDICATIONS &amp; USAGE SECTION"/>
                    <title>INDICATIONS AND USAGE</title>
                    <text>
                        <paragraph>
                            <content styleCode="bold">Allergic states</content>
                        </paragraph>
                        <paragraph>Control of severe or incapacitating allergic conditions intractable to adequate trials of conventional treatment in asthma, atopic dermatitis, contact dermatitis, drug hypersensitivity reactions, perennial or seasonal allergic rhinitis, and serum sickness. </paragraph>
                        <paragraph>
                            <content styleCode="bold">Dermatologic diseases</content>
                        </paragraph>
                        <paragraph>Bullous dermatitis herpetiformis, exfoliative erythroderma, mycosis fungoides, pemphigus, and severe erythema multiforme (Stevens-Johnson syndrome). </paragraph>
                        <paragraph>
                            <content styleCode="bold">Endocrine disorders</content>
                        </paragraph>
                        <paragraph>Primary or secondary adrenocortical insufficiency (hydrocortisone or cortisone is the drug of choice; may be used in conjunction with synthetic mineralocorticoid analogs where applicable; in infancy mineralocorticoid supplementation is of particular importance), congenital adrenal hyperplasia, hypercalcemia associated with cancer, and nonsuppurative thyroiditis.</paragraph>
                        <paragraph>
                            <content styleCode="bold">Gastrointestinal diseases</content>
                        </paragraph>
                        <paragraph>To tide the patient over a critical period of the disease in regional enteritis and ulcerative colitis. </paragraph>
                        <paragraph>
                            <content styleCode="bold">Hematologic disorders</content>
                        </paragraph>
                        <paragraph>Acquired (autoimmune) hemolytic anemia, congenital (erythroid) hypoplastic anemia (Diamond-Blackfan anemia), idiopathic thrombocytopenic purpura in adults, pure red cell aplasia, and selected cases of secondary thrombocytopenia. </paragraph>
                        <paragraph>
                            <content styleCode="bold">Miscellaneous</content>
                        </paragraph>
                        <paragraph>Diagnostic testing of adrenocortical hyperfunction, trichinosis with neurologic or myocardial involvement, tuberculous meningitis with subarachnoid block or impending block when used with appropriate antituberculous chemotherapy. </paragraph>
                        <paragraph>
                            <content styleCode="bold">Neoplastic diseases</content>
                        </paragraph>
                        <paragraph>For the palliative management of leukemias and lymphomas. </paragraph>
                        <paragraph>
                            <content styleCode="bold">Nervous system</content>
                        </paragraph>
                        <paragraph>Acute exacerbations of multiple sclerosis, cerebral edema associated with primary or metastatic brain tumor, craniotomy, or head injury. </paragraph>
                        <paragraph>
                            <content styleCode="bold">Ophthalmic diseases</content>
                        </paragraph>
                        <paragraph>Sympathetic ophthalmia, temporal arteritis, uveitis, and ocular inflammatory conditions unresponsive to topical corticosteroids. </paragraph>
                        <paragraph>
                            <content styleCode="bold">Renal diseases</content>
                        </paragraph>
                        <paragraph>To induce a diuresis or remission of proteinuria in idiopathic nephrotic syndrome or that due to lupus erythematosus. </paragraph>
                        <paragraph>
                            <content styleCode="bold">Respiratory diseases</content>
                        </paragraph>
                        <paragraph>Berylliosis, fulminating or disseminated pulmonary tuberculosis when used concurrently with appropriate antituberculous chemotherapy, idiopathic eosinophilic pneumonias, symptomatic sarcoidosis. </paragraph>
                        <paragraph>
                            <content styleCode="bold">Rheumatic disorders</content>
                        </paragraph>
                        <paragraph>As adjunctive therapy for short-term administration (to tide the patient over an acute episode or exacerbation) in acute gouty arthritis, acute rheumatic carditis, ankylosing spondylitis, psoriatic arthritis, rheumatoid arthritis, including juvenile rheumatoid arthritis (selected cases may require low-dose maintenance therapy). For the treatment of dermatomyositis, polymyositis, and systemic lupus erythematosus. </paragraph>
                    </text>
                    <effectiveTime value="20221201"/>
                </section>
            </component>
            <component>
                <section ID="LINK_03a54ae7-107e-496e-b82e-9b32df138749">
                    <id root="8a8197f5-468d-4c66-bff9-e119b17dfe6e"/>
                    <code code="34070-3" codeSystem="2.16.840.1.113883.6.1" displayName="CONTRAINDICATIONS SECTION"/>
                    <title>CONTRAINDICATIONS</title>
                    <text>
                        <paragraph>Systemic fungal infections (see 
                            <content styleCode="bold">
                                <linkHtml href="#_RefLINK_d916adef-be51-418d-98a4-5c8fab9">WARNINGS</linkHtml>
                                <linkHtml href="#_RefLINK_d916adef-be51-418d-98a4-5c8fab9">, </linkHtml>
                            </content>
                            <content styleCode="italics">
                                <linkHtml href="#_RefLINK_d916adef-be51-418d-98a4-5c8fab9">Fungal infections</linkHtml>
                            </content>).
                        </paragraph>
                        <paragraph>Dexamethasone tablets are contraindicated in patients who are hypersensitive to any components of this product. </paragraph>
                    </text>
                    <effectiveTime value="20240702"/>
                </section>
            </component>
            <component>
                <section ID="LINK_2ca356bc-f723-4904-83d2-1d4178ea8a75">
                    <id root="a0c907de-396f-4642-94d9-b09d61a21440"/>
                    <code code="34071-1" codeSystem="2.16.840.1.113883.6.1" displayName="WARNINGS SECTION"/>
                    <title>WARNINGS</title>
                    <effectiveTime value="20240702"/>
                    <component>
                        <section ID="LINK_3ec23c58-dc47-4dfd-862f-2893dda2ffa6">
                            <id root="9f9217a1-e359-4c23-8e63-e6148db537a6"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>General</title>
                            <text>
                                <paragraph>Rare instances of anaphylactoid reactions have occurred in patients receiving corticosteroid therapy (see 
                                    <content styleCode="bold">
                                        <content styleCode="underline">
                                            <linkHtml href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ac71f888-c83a-46a5-921c-1ebdf6cfadc1">ADVERSE REACTIONS</linkHtml>
                                        </content>
                                    </content>).
                                </paragraph>
                                <paragraph>Increased dosage of rapidly acting corticosteroids is indicated in patients on corticosteroid therapy subjected to any unusual stress before, during, and after the stressful situation. </paragraph>
                            </text>
                            <effectiveTime value="20240702"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_9eab792a-4b84-45c8-ba3e-d00b4a20916b">
                            <id root="cb064b57-d7d2-4838-aed5-a93a30093e4a"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>Cardio-renal</title>
                            <text>
                                <paragraph>Average and large doses of corticosteroids can cause elevation of blood pressure, sodium and water retention, and increased excretion of potassium. These effects are less likely to occur with the synthetic derivatives except when used in large doses. Dietary salt restriction and potassium supplementation may be necessary. All corticosteroids increase calcium excretion. </paragraph>
                                <paragraph> Literature reports suggest an apparent association between use of corticosteroids and left ventricular free wall rupture after a recent myocardial infarction; therefore, therapy with corticosteroids should be used with great caution in these patients.</paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_211c28a3-ea61-4273-a63b-e87b61b625ca">
                            <id root="53d524fc-6998-43e8-86b7-3b0d6bdef7e0"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>Endocrine</title>
                            <text>
                                <paragraph>Corticosteroids can produce reversible hypothalamic-pituitary adrenal (HPA) axis suppression with the potential for glucocorticosteroid insufficiency after withdrawal of treatment. Adrenocortical insufficiency may result from too rapid withdrawal of corticosteroids and may be minimized by gradual reduction of dosage. This type of relative insufficiency may persist for months after discontinuation of therapy; therefore, in any situation of stress occurring during that period, hormone therapy should be reinstituted. If the patient is receiving steroids already, dosage may have to be increased. </paragraph>
                                <paragraph>Metabolic clearance of corticosteroids is decreased in hypothyroid patients and increased in hyperthyroid patients. Changes in thyroid status of the patient may necessitate adjustment in dosage.</paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_b177b690-c239-4946-a8ab-d95483e6bca8">
                            <id root="f4754abc-bd79-4850-aa5f-246860a9e8f2"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>Infections</title>
                            <effectiveTime value="20240702"/>
                            <component>
                                <section ID="LINK_b7c0c9ce-6cb1-4753-9d66-c75fabe1bfdd">
                                    <id root="19ab350a-bed5-4256-8071-a8e2ec6b1808"/>
                                    <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                                    <title>
                                        <content styleCode="bold">
                                            <content styleCode="italics">General</content>
                                        </content>
                                    </title>
                                    <text>
                                        <paragraph>Patients who are on corticosteroids are more susceptible to infections than are healthy individuals. There may be decreased resistance and inability to localize infection when corticosteroids are used. Infection with any pathogen (viral, bacterial, fungal, protozoan or helminthic) in any location of the body may be associated with the use of corticosteroids alone or in combination with other immunosuppressive agents. These infections may be mild to severe. With increasing doses of corticosteroids, the rate of occurrence of infectious complications increases. Corticosteroids may also mask some signs of current infection. </paragraph>
                                    </text>
                                    <effectiveTime value="20221201"/>
                                </section>
                            </component>
                            <component>
                                <section ID="LINK_d916adef-be51-418d-98a4-5c8fab9d0f67">
                                    <id root="f44a7f71-079e-4959-8c11-579fa4daab02"/>
                                    <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                                    <title>
                                        <content styleCode="bold">
                                            <content styleCode="italics">Fungal Infections</content>
                                        </content>
                                    </title>
                                    <text>
                                        <paragraph>Corticosteroids may exacerbate systemic fungal infections and therefore should not be used in the presence of such infections unless they are needed to control life-threatening drug reactions. There have been cases reported in which concomitant use of amphotericin B and hydrocortisone was followed by cardiac enlargement and congestive heart failure (see 
                                            <content styleCode="bold">
                                                <content styleCode="underline">
                                                    <linkHtml href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ac71f888-c83a-46a5-921c-1ebdf6cfadc1">PRECAUTIONS, </linkHtml>
                                                </content>
                                            </content>
                                            <content styleCode="bold">
                                                <content styleCode="underline">
                                                    <linkHtml href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ac71f888-c83a-46a5-921c-1ebdf6cfadc1">DRUG INTERACTIONS</linkHtml>
                                                </content>,
                                            </content>
                                            <content styleCode="italics"> Amphotericin B injection and potassium-depleting agents</content>).
                                        </paragraph>
                                    </text>
                                    <effectiveTime value="20240702"/>
                                </section>
                            </component>
                            <component>
                                <section ID="LINK_855d1187-a2df-4d0e-824a-ed7dbfceeaa6">
                                    <id root="5f74f552-c3b8-4ef2-a874-b7f5b87a68e0"/>
                                    <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                                    <title>
                                        <content styleCode="bold">
                                            <content styleCode="italics">Special Pathogens</content>
                                        </content>
                                    </title>
                                    <text>
                                        <paragraph>Latent disease may be activated or there may be an exacerbation of intercurrent infections due to pathogens, including those caused by 
                                            <content styleCode="italics">Amoeba</content>,
                                            <content styleCode="italics">Candida</content>,
                                            <content styleCode="italics">Cryptococcus</content>,
                                            <content styleCode="italics">Mycobacterium</content>,
                                            <content styleCode="italics">Nocardia</content>,
                                            <content styleCode="italics">Pneumocystis</content>,
                                            <content styleCode="italics">Toxoplasma</content>.
                                        </paragraph>
                                        <paragraph>It is recommended that latent amebiasis or active amebiasis be ruled out before initiating corticosteroid therapy in any patient who has spent time in the tropics or any patient with unexplained diarrhea. </paragraph>
                                        <paragraph>Similarly, corticosteroids should be used with great care in patients with known or suspected Strongyloides (threadworm) infestation. In such patients, corticosteroid-induced immunosuppression may lead to Strongyloides hyperinfection and dissemination with widespread larval migration, often accompanied by severe enterocolitis and potentially fatal gram-negative septicemia. </paragraph>
                                        <paragraph> Corticosteroids should not be used in cerebral malaria.</paragraph>
                                    </text>
                                    <effectiveTime value="20221201"/>
                                </section>
                            </component>
                            <component>
                                <section ID="LINK_c68f1c41-26a7-426d-9847-a218727bc839">
                                    <id root="65fb4e3e-a522-4228-b0ec-b05a84d80960"/>
                                    <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                                    <title>
                                        <content styleCode="bold">
                                            <content styleCode="italics">Tuberculosis</content>
                                        </content>
                                    </title>
                                    <text>
                                        <paragraph>The use of corticosteroids in active tuberculosis should be restricted to those cases of fulminating or disseminated tuberculosis in which the corticosteroid is used for the management of the disease in conjunction with an appropriate antituberculous regimen.</paragraph>
                                        <paragraph>If corticosteroids are indicated in patients with latent tuberculosis or tuberculin reactivity, close observation is necessary as reactivation of the disease may occur. During prolonged corticosteroid therapy, these patients should receive chemoprophylaxis. </paragraph>
                                    </text>
                                    <effectiveTime value="20221201"/>
                                </section>
                            </component>
                            <component>
                                <section ID="LINK_0d66a9b6-daa5-4e96-971b-884dd3be9d97">
                                    <id root="e4c40ee0-b2b4-497d-83a2-9edd98dd98a1"/>
                                    <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                                    <title>
                                        <content styleCode="bold">
                                            <content styleCode="italics">Vaccination</content>
                                        </content>
                                    </title>
                                    <text>
                                        <paragraph>
                                            <content styleCode="bold">Administration of live or live, attenuated vaccines is contraindicated in patients receiving immunosuppressive doses of corticosteroids. Killed or inactivated vaccines may be administered. However, the response to such vaccines cannot be predicted. </content>Immunization procedures may be undertaken in patients who are receiving corticosteroids as replacement therapy, e.g., for Addison’s disease.
                                        </paragraph>
                                    </text>
                                    <effectiveTime value="20221201"/>
                                </section>
                            </component>
                            <component>
                                <section ID="LINK_001705cb-7b64-494f-b421-e4c66ae41aec">
                                    <id root="3b612dca-aaf5-4616-bdcf-63ee0d0243d4"/>
                                    <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                                    <title>
                                        <content styleCode="bold">
                                            <content styleCode="italics">Viral Infections   </content>
                                        </content>
                                    </title>
                                    <text>
                                        <paragraph>Chickenpox and measles can have a more serious or even fatal course in pediatric and adult patients on corticosteroids. In pediatric and adult patients who have not had these diseases, particular care should be taken to avoid exposure. The contribution of the underlying disease and/or prior corticosteroid treatment to the risk is also not known. If exposed to chickenpox, prophylaxis with varicella zoster immune globulin (VZIG) may be indicated. If exposed to measles, prophylaxis with immune globulin (IG) may be indicated (see the respective package inserts for VZIG and IG for complete prescribing information). If chickenpox develops, treatment with antiviral agents should be considered. </paragraph>
                                    </text>
                                    <effectiveTime value="20221201"/>
                                </section>
                            </component>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_5662a48e-5ac5-4b0b-a864-7595c748655a">
                            <id root="6750a90a-fbb2-4c3d-afff-65cfa4ec98a8"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>Ophthalmic</title>
                            <text>
                                <paragraph>Use of corticosteroids may produce posterior subcapsular cataracts, glaucoma with possible damage to the optic nerves, and may enhance the establishment of secondary ocular infections due to bacteria, fungi, or viruses. Consider referral to an ophthalmologist for patients who develop ocular symptoms or use corticosteroid-containing products for more than 6 weeks. The use of oral corticosteroids is not recommended in the treatment of optic neuritis and may lead to an increase in the risk of new episodes. Corticosteroids should not be used in active ocular herpes simplex.</paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                </section>
            </component>
            <component>
                <section ID="LINK_4ea26a5c-19b6-4b9d-8e9e-7eff1274fa61">
                    <id root="3d57fec7-b970-45d9-be52-ac55c002d6f4"/>
                    <code code="42232-9" codeSystem="2.16.840.1.113883.6.1" displayName="PRECAUTIONS SECTION"/>
                    <title>PRECAUTIONS</title>
                    <effectiveTime value="20240702"/>
                    <component>
                        <section ID="LINK_0d937cf0-d092-4ede-96e6-4e4f4b7c441c">
                            <id root="56ebd038-b5bd-4bdc-bb65-3aba50f573c9"/>
                            <code code="34072-9" codeSystem="2.16.840.1.113883.6.1" displayName="GENERAL PRECAUTIONS SECTION"/>
                            <title>General</title>
                            <text>
                                <paragraph>The lowest possible dose of corticosteroids should be used to control the condition under treatment. When reduction in dosage is possible, the reduction should be gradual. </paragraph>
                                <paragraph>Since complications of treatment with corticosteroids are dependent on the size of the dose and the duration of treatment, a risk/benefit decision must be made in each individual case as to dose and duration of treatment and as to whether daily or intermittent therapy should be used. </paragraph>
                                <paragraph>Kaposi’s sarcoma has been reported to occur in patients receiving corticosteroid therapy, most often for chronic conditions. Discontinuation of corticosteroids may result in clinical improvement. </paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_53962c18-a6be-4e97-921c-deb6f4ac852e">
                            <id root="69442f39-edcb-4e5e-af5d-78778985c572"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>Cardio-renal</title>
                            <text>
                                <paragraph>As sodium retention with resultant edema and potassium loss may occur in patients receiving corticosteroids, these agents should be used with caution in patients with congestive heart failure, hypertension, or renal insufficiency. </paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_9f769313-b820-429b-943a-4c7751b9aa3f">
                            <id root="392056fe-6163-4f3b-84c1-81ec7e3f2286"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>Endocrine</title>
                            <text>
                                <paragraph>Drug-induced secondary adrenocortical insufficiency may be minimized by gradual reduction of dosage. This type of relative insufficiency may persist for months after discontinuation of therapy; therefore, in any situation of stress occurring during that period, hormone therapy should be reinstituted. Since mineralocorticoid secretion may be impaired, salt and/or a mineralocorticoid should be administered concurrently. </paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_1a8217b2-c481-419f-98c2-fe0831ced20b">
                            <id root="d7ff891a-bf59-4e09-85b9-affd511602e5"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>Gastrointestinal</title>
                            <text>
                                <paragraph>Steroids should be used with caution in active or latent peptic ulcers, diverticulitis, fresh intestinal anastomoses, and nonspecific ulcerative colitis, since they may increase the risk of a perforation. </paragraph>
                                <paragraph>Signs of peritoneal irritation following gastrointestinal perforation in patients receiving corticosteroids may be minimal or absent. </paragraph>
                                <paragraph>There is an enhanced effect due to decreased metabolism of corticosteroids in patients with cirrhosis. </paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_0e4c71d5-9907-494c-b2c0-3f774982ca08">
                            <id root="a46a301a-ec2e-4d14-b238-946f68605f79"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>Musculoskeletal</title>
                            <text>
                                <paragraph>Corticosteroids decrease bone formation and increase bone resorption both through their effect on calcium regulation (i.e. decreasing absorption and increasing excretion) and inhibition of osteoblast function. This, together with a decrease in the protein matrix of the bone secondary to an increase in protein catabolism, and reduced sex hormone production, may lead to inhibition of bone growth in pediatric patients and the development of osteoporosis at any age. Special consideration should be given to patients at increased risk of osteoporosis (e.g., postmenopausal women) before initiating corticosteroid therapy. </paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_56bfd63e-5123-4936-a795-78dca33e28fe">
                            <id root="688050e7-6a30-4df5-9866-023820b060b3"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>Neuro-psychiatric</title>
                            <text>
                                <paragraph>Although controlled clinical trials have shown corticosteroids to be effective in speeding the resolution of acute exacerbations of multiple sclerosis, they do not show that they affect the ultimate outcome or natural history of the disease. The studies do show that relatively high doses of corticosteroids are necessary to demonstrate a significant effect (see 
                                    <content styleCode="bold">
                                        <content styleCode="underline">
                                            <linkHtml href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ac71f888-c83a-46a5-921c-1ebdf6cfadc1">DOSAGE AND ADMINISTRATION</linkHtml>
                                        </content>
                                    </content>).
                                </paragraph>
                                <paragraph>An acute myopathy has been observed with the use of high doses of corticosteroids, most often occurring in patients with disorders of neuromuscular transmission (e.g., myasthenia gravis), or in patients receiving concomitant therapy with neuromuscular blocking drugs (e.g., pancuronium). This acute myopathy is generalized, may involve ocular and respiratory muscles, and may result in quadriparesis. Elevation of creatinine kinase may occur. Clinical improvement or recovery after stopping corticosteroids may require weeks to years. </paragraph>
                                <paragraph>Psychic derangements may appear when corticosteroids are used, ranging from euphoria, insomnia, mood swings, personality changes, and severe depression, to frank psychotic manifestations. Also, existing emotional instability or psychotic tendencies may be aggravated by corticosteroids. </paragraph>
                            </text>
                            <effectiveTime value="20240702"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_5d47e85a-1fd8-4840-ad9b-33c5ec79fbeb">
                            <id root="2516041e-fe13-4662-b4aa-5ab5a531cb5c"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>Ophthalmic</title>
                            <text>
                                <paragraph>Intraocular pressure may become elevated in some individuals. If steroid therapy is continued for more than 6 weeks, intraocular pressure should be monitored.</paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_38ba458c-bfa1-4078-b1dd-66ba02d3736e">
                            <id root="1a9b0e08-fa69-4658-856e-f76cdd54930e"/>
                            <code code="42229-5" codeSystem="2.16.840.1.113883.6.1" displayName="SPL UNCLASSIFIED SECTION"/>
                            <title>Information for Patients</title>
                            <text>
                                <paragraph>Patients should be warned not to discontinue the use of corticosteroids abruptly or without medical supervision. As prolonged use may cause adrenal insufficiency and make patients dependent on corticosteroids, they should advise any medical attendants that they are taking corticosteroids and they should seek medical advice at once should they develop an acute illness including fever or other signs of infection. Following prolonged therapy, withdrawal of corticosteroids may result in symptoms of the corticosteroid withdrawal syndrome including myalgia, arthralgia, and malaise. </paragraph>
                                <paragraph>Persons who are on corticosteroids should be warned to avoid exposure to chickenpox or measles. Patients should also be advised that if they are exposed, medical advice should be sought without delay. </paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_9ad33611-5fb5-407b-9039-5f868c3d2ab2">
                            <id root="3cfe0fa8-01aa-4837-a822-f3fb1fc32a22"/>
                            <code code="34073-7" codeSystem="2.16.840.1.113883.6.1" displayName="DRUG INTERACTIONS SECTION"/>
                            <title>Drug Interactions</title>
                            <text>
                                <paragraph>
                                    <content styleCode="italics">Aminoglutethimide: </content>Aminoglutethimide may diminish adrenal suppression by corticosteroids.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Amphotericin B injection and potassium-depleting agents: </content>When corticosteroids are administered concomitantly with potassium-depleting agents (e.g., amphotericin B, diuretics), patients should be observed closely for development of hypokalemia. In addition, there have been cases reported in which concomitant use of amphotericin B and hydrocortisone was followed by cardiac enlargement and congestive heart failure.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Antibiotics: </content>Macrolide antibiotics have been reported to cause a significant decrease in corticosteroid clearance (see
                                    <content styleCode="bold">
                                        <content styleCode="underline">
                                            <linkHtml href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ac71f888-c83a-46a5-921c-1ebdf6cfadc1">DRUG INTERACTIONS</linkHtml>
                                        </content>,
                                    </content>
                                    <content styleCode="italics"> CYP 3A4 Inducers, CYP 3A4 Inhibitors and CYP 3A4 Substrates</content>).
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Anticholinesterases: </content>Concomitant use of anticholinesterase agents and corticosteroids may produce severe weakness in patients with myasthenia gravis. If possible, anticholinesterase agents should be withdrawn at least 24 hours before initiating corticosteroid therapy.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Anticoagulants, oral: </content>Co-administration of corticosteroids and warfarin usually results in inhibition of response to warfarin, although there have been some conflicting reports. Therefore, coagulation indices should be monitored frequently to maintain the desired anticoagulant effect.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Antidiabetics: </content>Because corticosteroids may increase blood glucose concentrations, dosage adjustments of antidiabetic agents may be required.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Antitubercular drugs: </content>Serum concentrations of isoniazid may be decreased.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Cholestyramine: </content>Cholestyramine may increase the clearance of corticosteroids.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Cyclosporine: </content>Increased activity of both cyclosporine and corticosteroids may occur when the two are used concurrently. Convulsions have been reported with this concurrent use.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Dexamethasone suppression test (DST): </content>False-negative results in the dexamethasone suppression test (DST) in patients being treated with indomethacin have been reported. Thus, results of the DST should be interpreted with caution in these patients.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Digitalis glycosides: </content>Patients on digitalis glycosides may be at increased risk of arrhythmias due to hypokalemia.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Ephedrine: </content>Ephedrine may enhance the metabolic clearance of corticosteroids, resulting in decreased blood levels and lessened physiologic activity, thus requiring an increase in corticosteroid dosage.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Estrogens, including oral contraceptives: </content>Estrogens may decrease the hepatic metabolism of certain corticosteroids, thereby increasing their effect.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">CYP 3A4 Inducers: </content>Dexamethasone is metabolized by CYP 3A4. Drugs which induce cytochrome P450 3A4 (CYP 3A4) enzyme activity
                                    <content styleCode="italics">(e.g., barbiturates, phenytoin, carbamazepine, rifampin) </content>may enhance the metabolism of corticosteroids and require that the dosage of the corticosteroid be increased.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">CYP 3A4 Inhibitors: </content>Concomitant administration of dexamethasone with erythromycin, a moderate CYP 3A4 inhibitor, has the potential to result in increased plasma concentrations of dexamethasone. Ketoconazole, a strong CYP3A4 inhibitor, has been reported to decrease the metabolism of certain corticosteroids by up to 60%, leading to increased risk of corticosteroid side effects. In addition, ketoconazole alone can inhibit adrenal corticosteroid synthesis and may cause adrenal insufficiency during corticosteroid withdrawal. Co-administration with other drugs which strongly inhibit CYP 3A4
                                    <content styleCode="italics">(e.g., itraconazole, clarithromycin, ritonavir, cobicistat-containing products) </content>may lead to increased plasma concentrations of corticosteroids and potentially increase the risk for systemic corticosteroid side effects. Consider the benefit of co-administration versus the potential risk of systemic corticosteroid effects, in which case patients should be monitored for systemic corticosteroid side effects.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">CYP 3A4 Substrates:</content> Dexamethasone is a moderate inducer of CYP 3A4. Co-administration with other drugs that are metabolized by CYP 3A4
                                    <content styleCode="italics">(e.g., indinavir, erythromycin) </content>may increase their clearance, resulting in decreased plasma concentration.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Nonsteroidal anti-inflammatory agents (NSAIDS): </content>Concomitant use of aspirin (or other nonsteroidal anti-inflammatory agents) and corticosteroids increases the risk of gastrointestinal side effects. Aspirin should be used cautiously in conjunction with corticosteroids in hypoprothrombinemia. The clearance of salicylates may be increased with concurrent use of corticosteroids.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Phenytoin: </content>In post-marketing experience, there have been reports of both increases and decreases in phenytoin levels with dexamethasone co-administration, leading to alterations in seizure control.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Skin tests: </content>Corticosteroids may suppress reactions to skin tests.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Thalidomide: </content>Co-administration with thalidomide should be employed cautiously, as toxic epidermal necrolysis has been reported with concomitant use.
                                </paragraph>
                                <paragraph>
                                    <content styleCode="italics">Vaccines: </content>Patients on corticosteroid therapy may exhibit a diminished response to toxoids and live or inactivated vaccines due to inhibition of antibody response. Corticosteroids may also potentiate the replication of some organisms contained in live attenuated vaccines. Routine administration of vaccines or toxoids should be deferred until corticosteroid therapy is discontinued if possible (see
                                    <content styleCode="bold">
                                        <linkHtml href="#_RefLINK_0d66a9b6-daa5-4e96-971b-884dd3b">WARNINGS,</linkHtml>
                                        <linkHtml href="#_RefLINK_0d66a9b6-daa5-4e96-971b-884dd3b"> Infections</linkHtml>
                                        <linkHtml href="#_RefLINK_0d66a9b6-daa5-4e96-971b-884dd3b">, </linkHtml>
                                    </content>
                                    <content styleCode="italics">
                                        <linkHtml href="#_RefLINK_0d66a9b6-daa5-4e96-971b-884dd3b">Vaccination</linkHtml>
                                    </content>).
                                </paragraph>
                            </text>
                            <effectiveTime value="20240702"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_fb04f1c1-4ae3-43ec-946d-2f3683aa9318">
                            <id root="3a4baee9-a4ff-4b74-91ac-f67558a4ad69"/>
                            <code code="34083-6" codeSystem="2.16.840.1.113883.6.1" displayName="CARCINOGENESIS &amp; MUTAGENESIS &amp; IMPAIRMENT OF FERTILITY SECTION"/>
                            <title>Carcinogenesis, Mutagenesis, Impairment of Fertility</title>
                            <text>
                                <paragraph>No adequate studies have been conducted in animals to determine whether corticosteroids have a potential for carcinogenesis or mutagenesis. Steroids may increase or decrease motility and number of spermatozoa in some patients. </paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_1b33803c-5c6a-4e19-b747-1dfa9c1d2058">
                            <id root="106a5e80-b6d6-4fc9-b1e1-776eacd38a31"/>
                            <code code="42228-7" codeSystem="2.16.840.1.113883.6.1" displayName="PREGNANCY SECTION"/>
                            <title>Pregnancy</title>
                            <text>
                                <paragraph>
                                    <content styleCode="italics">Teratogenic Effects</content>
                                </paragraph>
                                <paragraph>Corticosteroids have been shown to be teratogenic in many species when given in doses equivalent to the human dose. Animal studies in which corticosteroids have been given to pregnant mice, rats, and rabbits have yielded an increased incidence of cleft palate in the offspring. There are no adequate and well-controlled studies in pregnant women. Corticosteroids should be used during pregnancy only if the potential benefit justifies the potential risk to the fetus. Infants born to mothers who have received substantial doses of corticosteroids during pregnancy should be carefully observed for signs of hypoadrenalism. </paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_55fc3e15-8c86-4dd9-bfa9-66309957d525">
                            <id root="47661050-f2fa-4276-99f3-c380543a34cc"/>
                            <code code="34080-2" codeSystem="2.16.840.1.113883.6.1" displayName="NURSING MOTHERS SECTION"/>
                            <title>Nursing Mothers</title>
                            <text>
                                <paragraph>Systemically administered corticosteroids appear in human milk and could suppress growth, interfere with endogenous corticosteroid production, or cause other untoward effects. Because of the potential for serious adverse reactions in nursing infants from corticosteroids, a decision should be made whether to discontinue nursing or to discontinue the drug, taking into account the importance of the drug to the mother.</paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_d88f3cba-ae70-484f-9601-5f9595bf2c8e">
                            <id root="4a65020d-8087-4635-a55b-4e2e4c5a03ee"/>
                            <code code="34081-0" codeSystem="2.16.840.1.113883.6.1" displayName="PEDIATRIC USE SECTION"/>
                            <title>Pediatric Use</title>
                            <text>
                                <paragraph>The efficacy and safety of corticosteroids in the pediatric population are based on the well-established course of effect of corticosteroids, which is similar in pediatric and adult populations. Published studies provide evidence of efficacy and safety in pediatric patients for the treatment of nephrotic syndrome (patients &gt; 2 years of age), and aggressive lymphomas and leukemias (patients &gt; 1 month of age). Other indications for pediatric use of corticosteroids, e.g., severe asthma and wheezing, are based on adequate and well-controlled trials conducted in adults, on the premises that the course of the diseases and their pathophysiology are considered to be substantially similar in both populations. </paragraph>
                                <paragraph>The adverse effects of corticosteroids in pediatric patients are similar to those in adults (see 
                                    <content styleCode="bold">
                                        <content styleCode="underline">
                                            <linkHtml href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ac71f888-c83a-46a5-921c-1ebdf6cfadc1">ADVERSE REACTIONS</linkHtml>
                                        </content>
                                    </content>). Like adults, pediatric patients should be carefully observed with frequent measurements of blood pressure, weight, height, intraocular pressure, and clinical evaluation for the presence of infection, psychosocial disturbances, thromboembolism, peptic ulcers, cataracts, and osteoporosis. Pediatric patients who are treated with corticosteroids by any route, including systemically administered corticosteroids, may experience a decrease in their growth velocity. This negative impact of corticosteroids on growth has been observed at low systemic doses and in the absence of laboratory evidence of hypothalamic-pituitary-adrenal (HPA) axis suppression (i.e. cosyntropin stimulation and basal cortisol plasma levels). Growth velocity may therefore be a more sensitive indicator of systemic corticosteroid exposure in pediatric patients than some commonly used tests of HPA axis function. The linear growth of pediatric patients treated with corticosteroids should be monitored, and the potential growth effects of prolonged treatment should be weighed against clinical benefits obtained and the availability of treatment alternatives. In order to minimize the potential growth effects of corticosteroids, pediatric patients should be
                                    <content styleCode="italics">titrated </content>to the lowest effective dose.
                                </paragraph>
                            </text>
                            <effectiveTime value="20240702"/>
                        </section>
                    </component>
                    <component>
                        <section ID="LINK_9d03bb1b-d4f9-4bf8-a5c7-080d43ba923e">
                            <id root="76480848-73f2-4552-808b-2ddf2d95286b"/>
                            <code code="34082-8" codeSystem="2.16.840.1.113883.6.1" displayName="GERIATRIC USE SECTION"/>
                            <title>Geriatric Use</title>
                            <text>
                                <paragraph>Clinical studies did not include sufficient numbers of subjects aged 65 and over to determine whether they respond differently from younger subjects. Other reported clinical experience has not identified differences in responses between the elderly and younger patients. In general, dose selection for an elderly patient should be cautious, usually starting at the low end of the dosing range, reflecting the greater frequency of decreased hepatic, renal, or cardiac function, and of concomitant disease or other drug therapy. In particular, the increased risk of diabetes mellitus, fluid retention and hypertension in elderly patients treated with corticosteroids should be considered.</paragraph>
                            </text>
                            <effectiveTime value="20221201"/>
                        </section>
                    </component>
                </section>
            </component>
            <component>
                <section ID="LINK_9ca949a0-5646-4d44-a93d-2e2a4b8f7f0c">
                    <id root="f892333f-9b85-4811-a4ea-6be0f39a3cb8"/>
                    <code code="34084-4" codeSystem="2.16.840.1.113883.6.1" displayName="ADVERSE REACTIONS SECTION"/>
                    <title>ADVERSE REACTIONS</title>
                    <text>
                        <paragraph>
                            <content styleCode="bold">(listed alphabetically, under each subsection) </content>
                        </paragraph>
                        <paragraph>The following adverse reactions have been reported with dexamethasone or other corticosteroids: </paragraph>
                        <paragraph>
                            <content styleCode="italics">Allergic reactions: </content>Anaphylactoid reaction, anaphylaxis, angioedema.
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">Cardiovascular: </content>Bradycardia, cardiac arrest, cardiac arrhythmias, cardiac enlargement, circulatory collapse, congestive heart failure, fat embolism, hypertension, hypertrophic cardiomyopathy in premature infants, myocardial rupture following recent myocardial infarction (see
                            <content styleCode="bold">
                                <linkHtml href="#_RefLINK_9eab792a-4b84-45c8-ba3e-d00b4a2">WARNINGS, </linkHtml>
                                <linkHtml href="#_RefLINK_9eab792a-4b84-45c8-ba3e-d00b4a2">Cardio-renal</linkHtml>
                            </content>), edema, pulmonary edema, syncope, tachycardia, thromboembolism, thrombophlebitis, vasculitis.
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">Dermatologic: </content>Acne, allergic dermatitis, dry scaly skin, ecchymoses and petechiae, erythema, impaired wound healing, increased sweating, rash, striae, suppression of reactions to skin tests, thin fragile skin, thinning scalp hair, urticaria.
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">Endocrine: </content>Decreased carbohydrate and glucose tolerance, development of cushingoid state, hyperglycemia, glycosuria, hirsutism, hypertrichosis, increased requirements for insulin or oral hypoglycemic agents in diabetes, manifestations of latent diabetes mellitus, menstrual irregularities, secondary adrenocortical and pituitary unresponsiveness (particularly in times of stress, as in trauma, surgery, or illness), suppression of growth in pediatric patients.
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">Fluid and electrolyte disturbances: </content>Congestive heart failure in susceptible patients, fluid retention, hypokalemic alkalosis, potassium loss, sodium retention, tumor lysis syndrome.
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">Gastrointestinal: </content>Abdominal distention, elevation in serum liver enzyme levels (usually reversible upon discontinuation), hepatomegaly, increased appetite, nausea, pancreatitis, peptic ulcer with possible perforation and hemorrhage, perforation of the small and large intestine (particularly in patients with inflammatory bowel disease), ulcerative esophagitis.
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">Metabolic: </content>Negative nitrogen balance due to protein catabolism.
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">Musculoskeletal: </content>Aseptic necrosis of femoral and humeral heads, loss of muscle mass, muscle weakness, osteoporosis, pathologic fracture of long bones, steroid myopathy, tendon rupture, vertebral compression fractures.
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">Neurological/Psychiatric: </content>Convulsions, depression, emotional instability, euphoria, headache, increased intracranial pressure with papilledema (pseudotumor cerebri) usually following discontinuation of treatment, insomnia, mood swings, neuritis, neuropathy, paresthesia, personality changes, psychic disorders, vertigo.
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">Ophthalmic: </content>Exophthalmos, glaucoma, increased intraocular pressure, posterior subcapsular cataracts, vision blurred.
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">Other: </content>Abnormal fat deposits, decreased resistance to infection, hiccups, increased or decreased motility and number of spermatozoa, malaise, moon face, weight gain.
                        </paragraph>
                        <paragraph>
                            <content styleCode="bold">To report SUSPECTED ADVERSE REACTIONS, contact Amneal Pharmaceuticals at 1-877-835-5472 or FDA at 1-800-FDA-1088 or www.fda.gov/medwatch</content>.
                        </paragraph>
                    </text>
                    <effectiveTime value="20240702"/>
                </section>
            </component>
            <component>
                <section ID="LINK_2900ee21-2bf0-4c94-bb28-b016337dd67c">
                    <id root="46208b13-2502-4bbf-9193-66bfd9f77bf9"/>
                    <code code="34088-5" codeSystem="2.16.840.1.113883.6.1" displayName="OVERDOSAGE SECTION"/>
                    <title>OVERDOSAGE</title>
                    <text>
                        <paragraph>Treatment of overdosage is by supportive and symptomatic therapy. In the case of acute overdosage, according to the patient’s condition, supportive therapy may include gastric lavage or emesis. </paragraph>
                    </text>
                    <effectiveTime value="20221201"/>
                </section>
            </component>
            <component>
                <section ID="LINK_a8f5e226-19d2-44af-8055-cf52848353a0">
                    <id root="853ce766-07d8-4b3a-ac78-8a4232b84d40"/>
                    <code code="34068-7" codeSystem="2.16.840.1.113883.6.1" displayName="DOSAGE &amp; ADMINISTRATION SECTION"/>
                    <title>DOSAGE AND ADMINISTRATION</title>
                    <text>
                        <paragraph>
                            <content styleCode="bold">For oral administration </content>
                        </paragraph>
                        <paragraph>The initial dosage varies from 0.75 mg to 9 mg a day depending on the disease being treated. </paragraph>
                        <paragraph>
                            <content styleCode="italics">It Should Be Emphasized That Dosage Requirements Are Variable And Must Be Individualized On The Basis Of The Disease Under Treatment And The Response Of The Patient. </content>
                        </paragraph>
                        <paragraph>After a favorable response is noted, the proper maintenance dosage should be determined by decreasing the initial drug dosage in small decrements at appropriate time intervals until the lowest dosage that maintains an adequate clinical response is reached. </paragraph>
                        <paragraph>Situations which may make dosage adjustments necessary are changes in clinical status secondary to remissions or exacerbations in the disease process, the patient’s individual drug responsiveness, and the effect of patient exposure to stressful situations not directly related to the disease entity under treatment. In this latter situation it may be necessary to increase the dosage of the corticosteroid for a period of time consistent with the patient’s condition. If after long-term therapy the drug is to be stopped, it is recommended that it be withdrawn gradually rather than abruptly. </paragraph>
                        <paragraph>In the treatment of acute exacerbations of multiple sclerosis, daily doses of 30 mg of dexamethasone for a week followed by 4 mg to 12 mg every other day for one month have been shown to be effective (see 
                            <content styleCode="bold">
                                <linkHtml href="#_RefLINK_56bfd63e-5123-4936-a795-78dca33">PRECAUTIONS</linkHtml>
                                <linkHtml href="#_RefLINK_56bfd63e-5123-4936-a795-78dca33">, Neuro-psychiatric</linkHtml>
                            </content>).
                        </paragraph>
                        <paragraph>In pediatric patients, the initial dose of dexamethasone may vary depending on the specific disease entity being treated. The range of initial doses is 0.02 to 0.3 mg/kg/day in three or four divided doses (0.6 to 9 mg/m
                            <sup>2</sup>bsa/day).
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">For the purpose of comparison, the following is the equivalent milligram dosage of the various corticosteroids:</content>
                        </paragraph>
                        <table cellpadding="0pt" cellspacing="0pt" width="100%">
                            <col width="75%"/>
                            <col width="23%"/>
                            <tbody>
                                <tr>
                                    <td styleCode="Rrule Botrule Lrule Toprule " valign="top">
                                        <paragraph>
                                            <content styleCode="italics">Cortisone, 25 </content>
                                        </paragraph>
                                    </td>
                                    <td styleCode="Rrule Botrule Toprule " valign="top">
                                        <paragraph>
                                            <content styleCode="italics">Triamcinolone, 4 </content>
                                        </paragraph>
                                    </td>
                                </tr>
                                <tr>
                                    <td styleCode="Rrule Lrule Botrule " valign="top">
                                        <paragraph>
                                            <content styleCode="italics">Hydrocortisone, 20 </content>
                                        </paragraph>
                                    </td>
                                    <td styleCode="Rrule Botrule " valign="top">
                                        <paragraph>
                                            <content styleCode="italics">Paramethasone, 2 </content>
                                        </paragraph>
                                    </td>
                                </tr>
                                <tr>
                                    <td styleCode="Rrule Lrule Botrule " valign="top">
                                        <paragraph>
                                            <content styleCode="italics">Prednisolone, 5 </content>
                                        </paragraph>
                                    </td>
                                    <td styleCode="Rrule Botrule " valign="top">
                                        <paragraph>
                                            <content styleCode="italics">Betamethasone, 0.75 </content>
                                        </paragraph>
                                    </td>
                                </tr>
                                <tr>
                                    <td styleCode="Rrule Lrule Botrule " valign="top">
                                        <paragraph>
                                            <content styleCode="italics">Prednisone, 5 </content>
                                        </paragraph>
                                    </td>
                                    <td styleCode="Rrule Botrule " valign="top">
                                        <paragraph>
                                            <content styleCode="italics">Dexamethasone, 0.75 </content>
                                        </paragraph>
                                    </td>
                                </tr>
                                <tr>
                                    <td styleCode="Rrule Botrule Lrule " valign="top">
                                        <paragraph>
                                            <content styleCode="italics">Methylprednisolone, 4 </content>
                                        </paragraph>
                                    </td>
                                    <td styleCode="Rrule Botrule " valign="top"/>
                                </tr>
                            </tbody>
                        </table>
                        <paragraph>
                            <content styleCode="italics">These dose relationships apply only to oral or intravenous administration of these compounds. When these substances or their derivatives are injected intramuscularly or into joint spaces, their relative properties may be greatly altered. </content>
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">In acute, self-limited allergic disorders or acute exacerbations of chronic allergic disorders, </content>the following dosage schedule combining parenteral and oral therapy is suggested:
                        </paragraph>
                        <paragraph>
                            <content styleCode="underline">Dexamethasone Sodium Phosphate Injection, 4 mg per mL: </content>
                        </paragraph>
                        <paragraph>First Day </paragraph>
                        <paragraph>1 mL or 2 mL, intramuscularly </paragraph>
                        <paragraph>
                            <content styleCode="underline">Dexamethasone Tablets, 0.75 mg: </content>
                        </paragraph>
                        <paragraph>Second Day </paragraph>
                        <paragraph>4 tablets in two divided doses </paragraph>
                        <paragraph>Third Day </paragraph>
                        <paragraph>4 tablets in two divided doses </paragraph>
                        <paragraph>Fourth Day </paragraph>
                        <paragraph>2 tablets in two divided doses </paragraph>
                        <paragraph>Fifth Day </paragraph>
                        <paragraph>1 tablet </paragraph>
                        <paragraph>Sixth Day </paragraph>
                        <paragraph>1 tablet </paragraph>
                        <paragraph>Seventh Day </paragraph>
                        <paragraph>No treatment </paragraph>
                        <paragraph>Eighth Day </paragraph>
                        <paragraph>Follow-up visit </paragraph>
                        <paragraph>This schedule is designed to ensure adequate therapy during acute episodes, while minimizing the risk of overdosage in chronic cases. </paragraph>
                        <paragraph>In 
                            <content styleCode="italics">cerebral edema</content>, dexamethasone sodium phosphate injection is generally administered initially in a dosage of 10 mg intravenously followed by 4 mg every six hours intramuscularly until the symptoms of cerebral edema subside. Response is usually noted within 12 to 24 hours and dosage may be reduced after two to four days and gradually discontinued over a period of five to seven days. For palliative management of patients with recurrent or inoperable brain tumors, maintenance therapy with either dexamethasone sodium phosphate injection or dexamethasone tablets in a dosage of 2 mg two or three times daily may be effective.
                        </paragraph>
                        <paragraph>
                            <content styleCode="italics">Dexamethasone suppression tests</content>
                        </paragraph>
                        <paragraph>1.   Tests for Cushing's syndrome Give 1 mg of dexamethasone orally at 11:00 p.m. </paragraph>
                        <paragraph>Blood is drawn for plasma cortisol determination at 8:00 a.m. the following morning. For greater accuracy, give 0.5 mg of dexamethasone orally every 6 hours for 48 hours. Twenty-four hour urine collections are made for determination of 17-hydroxycorticosteroid excretion.</paragraph>
                        <paragraph>2.   Test to distinguish Cushing's syndrome due to pituitary ACTH excess from Cushing's syndrome due to other causes.</paragraph>
                        <paragraph>Give 2 mg of dexamethasone orally every 6 hours for 48 hours. Twenty-four hour urine collections are made for determination of 17-hydroxycorticosteroid excretion. </paragraph>
                    </text>
                    <effectiveTime value="20240702"/>
                </section>
            </component>
            <component>
                <section ID="LINK_094fa980-cb70-47d9-a0bd-b568e383faa1">
                    <id root="52ba55c6-b5e9-4192-82a3-0b6823dd3794"/>
                    <code code="34069-5" codeSystem="2.16.840.1.113883.6.1" displayName="HOW SUPPLIED SECTION"/>
                    <title>HOW SUPPLIED</title>
                    <text>
                        <paragraph>Dexamethasone Tablets USP, 
                            <content styleCode="bold">4 mg,</content> are supplied as white to off-white, round shaped, uncoated, flat tablet with beveled edges, scored on one side and product identification “E3” debossed on the other side.
                        </paragraph>
                        <paragraph>They are available as follows:</paragraph>
                        <paragraph>Cartons of 100 tablets (10 tablets per blister pack x 10), NDC 0904-7266-61</paragraph>
                        <paragraph>
                            <content styleCode="italics">Storage </content>
                        </paragraph>
                        <paragraph>Store at 20° to 25°C (68° to 77°F) [see USP Controlled Room Temperature]. </paragraph>
                        <paragraph>Protect from moisture. </paragraph>
                        <paragraph>Dispense in a tight, light-resistant, child-resistant container as defined in the USP.</paragraph>
                        <paragraph>Manufactured by:
                            <br/>
                            <content styleCode="bold">Amneal Pharmaceuticals Pvt. Ltd.</content>
                            <br/>
                            <content styleCode="bold">Oral Solid Dosage Unit</content>
                            <br/>Ahmedabad 382213, INDIA
                        </paragraph>
                        <paragraph>Distributed by:
                            <br/>
                            <content styleCode="bold">Amneal Pharmaceuticals LLC</content>
                            <br/>Bridgewater, NJ 08807
                        </paragraph>
                        <paragraph>
                            <content styleCode="bold">Packaged and Distributed By:</content>
                        </paragraph>
                        <paragraph>
                            <content styleCode="bold">MAJOR® PHARMACEUTICALS</content>
                        </paragraph>
                        <paragraph>Indianapolis, IN 46268 USA</paragraph>
                        <paragraph>Refer to package label for Distributor's NDC Number  </paragraph>
                        <paragraph>Rev. 12-2021-01</paragraph>
                    </text>
                    <effectiveTime value="20240702"/>
                </section>
            </component>
            <component>
                <section ID="ID_ccc135a7-0e33-4940-ade1-30974be119d8">
                    <id root="5719f970-6655-49ad-ab8e-53c2cd9bcf45"/>
                    <code code="51945-4" codeSystem="2.16.840.1.113883.6.1" displayName="PACKAGE LABEL.PRINCIPAL DISPLAY PANEL"/>
                    <title>Package/Label Display Panel </title>
                    <text>
                        <paragraph>Dexamethasone</paragraph>
                        <paragraph>Tablets, USP</paragraph>
                        <paragraph>4 mg</paragraph>
                        <paragraph>100 TABLETS (10 x 10)</paragraph>
                        <renderMultiMedia ID="id207233136" referencedObject="ID_57f6d482-f0e5-4e05-8833-5a3a155bc169"/>
                    </text>
                    <effectiveTime value="20240702"/>
                    <component>
                        <observationMedia ID="ID_57f6d482-f0e5-4e05-8833-5a3a155bc169">
                            <text>4mg carton label</text>
                            <value mediaType="image/jpeg" xsi:type="ED">
                                <reference value="64b46398-9b97-45e8-b1ba-1a202d574448-00.jpg"/>
                            </value>
                        </observationMedia>
                    </component>
                </section>
            </component>
        </structuredBody>
    </component>
</document>`;
///////////XML Validation==========================
const result = XMLValidator.validate(xmlFile);
if (result === true) {
  console.log(`XML file is valid`, result);
}

if (result.err) {
  console.log(`XML is invalid becuause of - ${result.err.msg}`, result);
}
////////////XMLvalidation++++++++++++++++++++++++


//xml file from https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms762271(v=vs.85)
//const xmlFile = readFileSync(`${process.cwd()}/xml/books.xml`, 'utf8');
const parser = new XMLParser();
const json = parser.parse(xmlFile);
var text = ''
for (t in Object.values(flatten(json))){
const flattext=Object.values(flatten(json))
   if (flattext[t]!="") { 
   text=text.concat(Object.values(flattext)[t],'\n')
   }
}
//console.log(`First book: `, text);


return text
}