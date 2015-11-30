---
layout: page
title:  "Credits"
weight: "5"
---

<div id="credits">

  <p>Neatline -- still work in progress -- emerges from a long process of research and prototyping at the <a href="http://scholarslab.org">Scholars’ Lab</a>, a digital center at the <a href="http://lib.virginia.edu/">University of Virginia Library</a>.  Its story is characteristic of digital humanities work, but uncommon in more traditional modes of humanities scholarship.  Large-scale software development is an inherently collaborative process, in which final products draw on thousands of conceptual, technical, and aesthetic decisions made by dozens of people over the course of years. We have therefore chosen to represent our project in phases, and augment a traditional, role-oriented list of credits with a narrative that traces the intellectual lineage of Neatline from concept to working code.</p>

  <p>Get the <a href="../about">short, current version</a> in the sidebar on our About page.</p>

  <p>If you'd like to know more about authorship and credit in the digital humanities, we recommend the following resources:</p>

  <ul>
    <li><a href="http://www.mlajournals.org/doi/abs/10.1632/prof.2011.2011.1.169">Where Credit Is Due</a>: Preconditions for the Evaluation of Collaborative Digital Scholarship</li>
    <li>The <a href="http://faircite.wordpress.com/">FairCite</a> initiative and a related <a href="http://digitalhumanities.org/answers/topic/faircite-who-should-we-cite-in-collaborative-dh-projects">DH Answers thread</a></li>
    <li>The <a href="http://mith.umd.edu/offthetracks/recommendations/">Collaborators' Bill of Rights</a></li>
    <li>Our Praxis Program <a href="http://praxis.scholarslab.org/charter.html">charter and related posts</a> by Praxis students and collaborators</li>
  </ul>

  <p>And if you were a contributor to the Neatline project and we have overlooked or misrepresented your work, please let <a href="http://www.scholarslab.org/author/wsg4w/">Wayne Graham</a> and <a href="http://nowviskie.org">Bethany Nowviskie</a> know immediately!</p>

  <h2>Phase 1: Scholars’ Lab R&D (2008-2009)</h2>

  <div class="main-text">
    <p>In 2008, the Scholars' Lab (with the technical guidance of <strong>Bess Sadler</strong>, <strong>Chris Gist</strong>, and <strong>Kelly Johnston</strong>, and the assistance of <strong>Dave Richardson</strong>) began developing a new infrastructure for delivering library-managed GIS data and georeferenced historical maps.  <strong>Adam Soroka</strong> served as lead developer in that effort.  As all Scholars' Lab staff are allotted 20% of their time to independent research and development (otherwise devoted to collaborations with UVa faculty and graduate students or the development of core tools and systems for scholarship), Soroka had the freedom to think and to tinker.</p>

    <p>One of his chief questions in building this infrastructure was, "What next?" In other words, what might scholars be able to do if they had access to 'streaming' historical maps via <a href="http://code4lib.org/files/soroka-presentation-2009.pdf">a modern, open, webservice-based GIS infrastructure?</a> That's a PDF link -- and the title of the workshop Soroka ultimately offered on this subject at the 2009 <a href="http://code4lib.org">code4lib</a> conference in Providence, Rhode Island.</p>

    <p>Soroka began to consult with Scholars' Lab director <strong>Bethany Nowviskie</strong> about the possibilities.  Because code4lib was to be held in Providence, he quickly prototyped a map-and-timeline exhibit based on Special Collections metadata from Brown University Library (graciously provided by <strong>Patrick Yott</strong>).  The prototype exhibit plotted a letters sent and received by H.P. Lovecraft, a 20th-century writer of the Gothic whose work makes heavy reference to the urban geography of Providence. Soroka's experiment explored the concept of geo-temporal mapping as a methodology for creating interpretive views of archival collections expressed in EAD (encoded archival description) format. Nowviskie contextualized their thinking in a talk on "<a href="http://mith.umd.edu/114-mith-digital-dialogue-bethany-nowviskie-new-world-ordering-shaping-geospatial-information-for-scholarly-use/">New World Ordering: Shaping Geospatial Information for Scholarly Use</a>," at the University of Maryland.</p>

    <p>Through this work, faculty and staff of the Scholars' Lab began to imagine strategies not just for public access to library holdings of maps, but for annotative, scholarly interfaces to collections of maps and manuscripts.</p>
  </div>

  <div class="sidebar">
    <strong>Contributors</strong>
    <ul>
      <li><strong>Adam Soroka</strong>: developer</li>
      <li><strong>Bethany Nowviskie</strong>: interlocutor, distractor in chief</li>
            <li><strong>Bess Sadler</strong>: GIS infrastructure project manager</li>
      <li><strong>Chris Gist</strong>: user requirements consultation.</li>
      <li><strong>Kelly Johnston</strong>: user requirements consultation.</li>
      <li><strong>Dave Richardson</strong>: GIS research assistant.</li>
    </ul>
  </div>

  <h2>Phase 2: NEH Start-Up Grant (2009-2010)</h2>

  <div class="main-text">
    <p>Building on <a href="http://spatial.scholarslab.org">growing interest</a> in the concept of geo-temporal mapping in the DH community, Soroka's code4lib prototype became the basis for a Phase II Digital Humanities Start-Up Grant awarded to the Scholars' Lab by the <a href="http://odh.neh.gov">National Endowment for the Humanities</a> and the <a href="http://www.imls.gov/">IMLS</a> in late 2009.  <strong>Bethany Nowviskie</strong> and <strong>Adam Soroka</strong> served as primary investigators on the $34,656 grant, which benefited from a strong board of outside advisors, including:</p>

    <ul>
      <li><strong>Ellen Dunlap</strong>: President, American Antiquarian Society</li>
      <li><strong>N. Turk McCleskey</strong>: Professor of History, Virginia Military Institute</li>
      <li><strong>Jerome McGann</strong>: John Stewart Bryan Professor of English, University of Virginia</li>
      <li><strong>Michael Plunkett</strong>: Director Emeritus of Special Collections, University of Virginia Library</li>
      <li><strong>Daniel Pitti</strong>: Associate Director, Institute for Advanced Technology in the Humanities</li>
    </ul>

    <p>With NEH support, the project entered into its first stage of major development as a standalone, Java-based application with code commits from <strong>Adam Soroka</strong> and <strong>Sam Eberspacher</strong>, design by <strong>Joe Gilbert</strong> and Bethany Nowviskie, and research contributions by <strong>Dave Richardson</strong>, <strong>Matt Munson</strong>, and <strong>Richard Miller</strong>.</p>

    <p>However, around this time <strong>Wayne Graham</strong> joined the Scholars' Lab, and he and Nowviskie began to experiment with <a href="http://omeka.org">Omeka</a>, a digital-collections building and publishing framework developed by <a href="http://chnm.gmu.edu">CHNM</a>, the Center for History and New Media at George Mason University, for other SLab projects.</p>

    <p>As work on Neatline continued, the design requirements and solution space of the application became more fully understood. Soroka, Graham, and Nowviskie decided that the underlying collections required as a foundation for Neatline projects could be better served by Omeka (provided the Scholars' Lab also developed a number of <a href="http://www.scholarslab.org/current-research/omeka-plugins/">other data import and management plugins</a>) -- thus leaving Neatline developers free to focus on the specialized task of geo-temporal interpretation. (<strong>Ethan Gruber</strong> contributed significantly to this work.) Furthermore, they realized that a plugin-based approach would allow many of the discrete functions of Neatline to be atomized -- so that users could to mix and match software features of their choosing.</p>

    <p>As Soroka transitioned to another position at the UVa Library, Wayne Graham led the restructuring of Neatline as a suite of modular plugins that could extend the functionality of Omeka. This change in approach had the added benefit of moving Neatline onto an accessible technology stack (PHP and MySQL) with a significant installation base and developer community, making it easier for end users to install, configure, and deploy Neatline exhibits.  Nowviskie and Soroka drafted a <a href="https://securegrants.neh.gov/publicquery/main.aspx?f=1&gn=HD-50769-09">white paper</a> describing this change in approach and outlining Neatline's design philosophy, which is centered in hand-craftedness and <em>graphesis</em>.</p>
  </div>

  <div class="sidebar">
    <strong>Contributors</strong>
    <ul>
      <li><strong>Adam Soroka</strong>: PI and lead developer.</li>
      <li><strong>Bethany Nowviskie</strong>: PI and project director.</li>
      <li><strong>Wayne Graham</strong>: Project manager and developer.</li>
      <li><strong>Ethan Gruber</strong>: Omeka plugin developer.</li>
      <li><strong>Joe Gilbert</strong>: UX designer.</li>
      <li><strong>Sam Eberspacher</strong>: Student developer.</li>
      <li><strong>Matt Munson</strong>: Research assistance.</li>
      <li><strong>Rich Miller</strong>: Research assistance.</li>
    </ul>
  </div>

  <h2>Phase 3: Omeka + Neatline (2011-present)</h2>

  <div class="main-text">

    <p>In 2011, the Scholars' Lab and the Roy Rosenzweig Center for History and New Media entered into a new partnership centered around Neatline. This work, supported by $665,248 in funding from the Library of Congress (split evenly between the two centers), is led by co-investigators <strong>Bethany Nowviskie</strong> and <strong>Tom Scheinfeldt</strong>.  The "<a href="http://neatline.scholarslab.org/2011/02/15/scholars-lab-and-chnm-partner-on-omeka-neatline/">Omeka + Neatline</a>" project is not only meant to push Neatline development to a public release and strengthen the Omeka codebase, but also to explore grassroots, open source, developer-driven collaboration between two digital centers on issues of cultural heritage interpretation. The project concludes in August of 2012.</p>

    <p>New Scholars' Lab R&D staff contributed significantly to the design and development of Neatline and related plugins in this phase.  These include <strong>David McClure</strong>, <strong>Eric Rochester</strong>, and <strong>Jeremy Boggs</strong>. <strong>Ronda Grizzle</strong> helped to create a logo and assisted with other communications needs.</p>

    <p>Building on the work of previous contributors, major development of the Neatline 1.0 codebase was undertaken by <strong>Wayne Graham</strong>, McClure, Rochester, and Boggs starting in the summer of 2011. Rochester concentrated on Neatline Features.  Boggs developed Neatline Time and created our informational website.  Graham served as project manager, but also contributed code and oversaw code packaging and quality assurance.  Nowviskie helped to test the software, offered design direction, and wrote and spoke about and wrote and wrote many things. <strong>Ray Johnson</strong> managed the money. Graham and McClure collaborated with outside testers, including <strong>Elijah Meeks</strong> of Stanford University.</p>

    <p>During this phase, <strong>David McClure</strong> emerged as our lead project developer, designing and implementing the Neatline exhibit-building interface and finalizing feature specifications and user workflows for the entire family of Neatline plugins.</p>

    <p>However, Neatline has been and remains a family affair for the whole <a href="http://scholarslab.org">Scholars' Lab</a> team, including <strong>Becca Peters</strong>, <strong>Eric Johnson</strong>, <strong>Kelly Johnston</strong>, <strong>Chris Gist</strong>, and our student workers and Graduate and Praxis Program fellows. The core Neatline team is deeply grateful to all our friends at the SLab. We'd also like to thank our UVa Library colleagues (including <a href="http://www2.lib.virginia.edu/small/">Special Collections</a> and <a href="http://www2.lib.virginia.edu/digitalcuration/">Digital Curation Services</a>, who provided images for sample exhibits), and many scholars and cultural heritage professionals at Virginia and elsewhere who have offered us their encouragement and advice.</p>
  </div>

  <div class="sidebar">
    <strong>Contributors</strong>
      <ul>
        <li><strong>David McClure</strong>: Lead Neatline developer and software architect.</li>
        <li><strong>Eric Rochester</strong>: Developer of the Neatline Features plugin.</li>
        <li><strong>Jeremy Boggs</strong>: Web designer, developer of Neatline Time.</li>
        <li><strong>Wayne Graham</strong>: Project manager and lead engineer.</li>
        <li><strong>Bethany Nowviskie</strong>: PI and project director.</li>
        <li><strong>Paul Mawyer</strong>: Research assistance.</li>
        <li><strong>Ronda Grizzle</strong>: Communications and outreach.</li>
        <li><strong>Raylon Johnson</strong>: Grants management.</li>
        <li><strong>Tom Scheinfeldt</strong>: "Omeka + Neatline" co-PI.</li>
        <li><a href="http://omeka.org/about/staff/">Omeka collaborators</a> at RRCHNM: Sharon Leon, Sheila Brennan, John Flatness, Patrick Murray-John, Kim Nguyen, Jim Safley, and Roberto Sanchez</li>
      </ul>
  </div>
</div>
