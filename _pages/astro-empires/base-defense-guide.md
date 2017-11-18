---
layout: page
title: "AstroEmpires: Base Defense Guide"
date: 2007-01-26 09:56
permalink: /astro-empires/base-defense-guide/
landing: true
---
{% include shared/astro_empire_header.html %}

<blockquote>
&#8220;Fixed fortifications are a monument to the stupidity of man.&#8221;
<small>Geo. S. Patton</small>
</blockquote>

<div class='row'>
<div class='col-md-4' >
<div class='toc'>


  <a name='toc' id='toc'>
</a>
<b>On this page...</b> (<a id="tocidtog" href="javascript:toggle('tocid');">hide</a>)
<ul class='toc' id='tocid'>
<li><a href='#toc1'>Motivation</a> </li>
<li><a href='#toc2'>Strategy</a> <ul class='toc'>
<li><a href='#toc3'>Example</a> </li>
</ul>
</li>
<li><a href='#toc4'>Defenses</a> <ul class='toc'>
<li><a href='#toc5'>Command Centers (CC)</a></li>
<li><a href='#toc6'>Turrets</a> </li>
<li><a href='#toc7'>Shields</a> </li>
<li><a href='#toc8'>Planetary Rings</a> </li>
<li><a href='#toc9'>Trade Pring Effect</a> </li>
<li><a href='#toc10'>Practical Example</a> </li>
</ul>
</li>
<li><a href='#toc11'>Standards</a> <ul class='toc'>
<li><a href='#toc12'>Command Centers</a> </li>
<li><a href='#toc13'>Turrets and Prings</a> </li>
<li><a href='#toc14'>Shields</a> </li>
<li><a href='#toc15'>Fleet</a> </li>
</ul>
</li>
<li><a href='#toc16'>Conclusion</a> </li>
</ul>
</div>
</div>
<div class='col-md-8'>

The <strong>Base Defense Guide</strong> describes suitable defenses premised on the base's profile profile; how much an attacker can reasonably expect to get in pillaging the base. The goal is to provide a basic understanding of base defense that enables a player to build defenses specific to his needs. Remember, any base defense may be taken by a motivated rival. The objective is to reduce the benefit the rival gains by taking the base.

While Patton's famous saying is valid, in Astro Empires the only thing more foolhardy than fixed fortifications is no fixed fortification. Astro Empires is an economic, military, political simulation. To ignore any of these aspects is to jeopardize one's enjoyment of the game.  This guide discusses the defensive structures and offers a structure for when to have what mode of base defense.
</div>
</div>

<h2> <a name='toc1' id='toc1'> </a>Motivation</h2>

As with the [Small Fleet Doctrine](/astro-empires/small-fleet-doctrine), this guide is about efficiencies.
You are trying to raise the efficiency of your defenses to reduce the
efficiency of your rivals. If he is going to take your base, you need
to ensure he does not profit in the exchange. Generally, wise rivals
only attack bases that are likely to turn a profit. The question becomes
what is profit? Defenses generally deter those who are after momentary
financial gain. Some rivals have other motives: power, shame, control and
the strategic goal of suppressing an opponent in war are other
reasons why a rival might hit your base. To defend against these
motives, a player's only real defense is a strong mobile fleet that he
closely shepherds. That mobile fleet is the purpose of the [Small Fleet Doctrine](/astro-empires/small-fleet-doctrine).


There are essentially three things your base defenses protect. The
obvious first benefactor is the base itself: its economy and
productivity. The second benefactor is that base's trade. The other
benefactor is the fleet in orbit over that base.

<h2><a name='toc2' id='toc2'></a>Strategy</h2>

The power of a base's combined defenses and fleets should exceed the
total economic value of the base, fleet debris and trade routes. The
defenses protect the base and the fleet protects itself and the trade
routes. How do you calculate the base's economic value?

   * The value of the fleet debris is twice the percentage of the player's Armour technology. Therefore, Armour-12 provides 24 percent that fleet's value of debris.
   * The trade routes are a simple addition of the value of the route viewed in your base's Trade tab.

The economic value of the base is a little more fluid. The value is:

<div class='alert alert-info' >

Value = (Empire Econ / Base Econ) * Credits on Hand + Pillage Bonus

</div>

That is, divide the total imperial economy by that base's economy; this
is a percentage of its contribution to the economy. This provides a
percentage share of the credits you have available to
spend.<sup> <a href='#fn-1'>1</a> </sup>
To this, you add the pillage bonus. The table below shows the rough
bonus provided derived from that base's economy. I would argue that the
bonus is what pillagers can rely on, so discount the cash-on-hand
benefit by keeping those credits banked or spent.


To protect the trade routes, you need an efficient fleet (a balance of
Fighters and Cruisers) overhead. To keep it simple, let us assume that
the fleet's responsibility is to defend itself and the trade routes, and
the base defenses are responsible for defending the base. When you get
to Planetary Rings, you will learn this model starts to flake as the
defenses are strong enough to assist in protecting the value of the
trade routes.



<a name='pillagebonus' id='pillagebonus'></a> <span class='bburl'>[url=http://dausha.net/astro-empires/base-defense-guide#pillagebonus#pillagebonus [/url]</span>

<table class='table table-hover table-condensed'>
  <thead>
  <tr>
<th>Base Econ</th>
<th>Pillage Bonus</th>
<th>Base Econ</th>
<th>Pillage Bonus</th>
</tr>
</thead>
<tbody>
  <tr>
<td>10</td>
<td>54</td>
<td>110</td>
<td>6534</td>
</tr>
<tr>
<td>20</td>
<td>216</td>
<td>120</td>
<td>7776</td>
</tr>
<tr>
<td>30</td>
<td>486</td>
<td>130</td>
<td>9126</td>
</tr>
<tr>
<td>40</td>
<td>864</td>
<td>140</td>
<td>10584</td>
</tr>
<tr>
<td>50</td>
<td>1350</td>
<td>150</td>
<td>12150</td>
</tr>
<tr>
<td>60</td>
<td>1944</td>
<td>160</td>
<td>13824</td>
</tr>
<tr>
<td>70</td>
<td>2646</td>
<td>170</td>
<td>15606</td>
</tr>
<tr>
<td>80</td>
<td>3456</td>
<td>180</td>
<td>17496</td>
</tr>
<tr>
<td>90</td>
<td>4374</td>
<td>190</td>
<td>19494</td>
</tr>
<tr>
<td>100</td>
<td>5400</td>
<td>200</td>
<td>21600</td>
</tr>
</tbody>
</table>
<h3> <a name='toc3' id='toc3'> </a>Example</h3>

Assume you have 7000 credits on hand, your total economy is 1000 and your base's economy is 100. The percentage share is 10 percent (1000/100), or 700. The pillage bonus is 5400. Therefore, the rival would obtain 6100 in pillaging that base.


Continuing with the example above, if you have 10,000 credits in fleet
over the base and your Armour technology is at level 10, then that fleet
would provide 2,000 credits in salvage. Therefore, the base's fleet and
pillage value is 8,100.


If your base has four trade routes each valued at, say, 2000, then the
piracy value is 8,000. Therefore, the economic gain to your rival
is 16,100.


Finally, you have to deduce how much salvage he may obtain in recovering
his own fleet. Assuming his fleet was evenly matched with yours (10,000)
and had the same Armour tech, then he would recover 2,000. This makes
the total economic value at 18,100. **Your defenses must create more economic loss than 18,100 to make that base non-profitable.** Based on
the rule of thumb above, your base defenses need to handle 9,000 credits of this
value, with the overhead fleet able to handle the other 9,000 credits
(or more).


Let us assume your fleet defenses are a split mix of Cruisers and
Fighters (5,000 or 25 Cruisers and 5,000 or 1,000 Fighters). Assuming
power technology (Laser and Plasma) at 10, then the combined firepower
of this fleet is 39,000; but you have to be mindful of the weakness of
Fighters against shielded units, which reduces the overall efficacy of
the fleet. In the face of Dreadnoughts, the Fighters and Cruisers are
effectively
worthless.<sup> <a href='#fn-2'>2</a> </sup>
What can we do to even the odds?


First, the solution is not always more fleet. More fleet equals more
debris. So, the fleet becomes its own problem. This is why the base
defenses should be somewhat self-sustaining.

<h2> <a name='toc4' id='toc4'> </a>Defenses</h2>

This section discusses the four categories of Base Defenses. For the
purpose of this article, Commanders are not considered.

<h3> <a name='toc5' id='toc5'> </a>Command Centers (CC)</h3>

<blockquote>

Command Centers value lies in raising occupation.

</blockquote>

Because Command Centers raise the base-owner's overhead fleet's power,
their value lies in the <em>offensive</em>. This means they provide limited
value on the defensive, because a wise attacker will bring the fleet
necessary to take out the fleet's armour, thus limiting his fleet's
exposure to the higher power.


The only context, therefore, where Command Centers can be used in the
offensive is in raising or harassing occupations. Specifically, Fighters
can deliver more punch to harvesting Recyclers.  Therefore, you should
always have some Command Centers available in the event you need to
raise or harass an occupation fleet.


Each Command Center boosts your overall defensive power by five percent.
Veterans will build ten to fifteen CCs on a base to improve the power of
the defensive fleet up to 75 percent. Building ten is considered
reasonable for a free player. A Heavy Cruiser with 10 CCs and medium
plasma research (10-15 levels) will dish out 125 points of damage.
Command Centers protect the overhead fleet, which protects trade routes.


In the example above, the Cruisers delivered only 36 points, six after
passing through the shield. With 10 Command Centers, they would deliver
54 points, or 24 points. That is four times more effective damage.
Fifteen Centers would allow 33 points to penetrate the shields. So,
instead of needing 128 Cruisers (25,600cr) to defeat a rival
Dreadnought, you need 35 (7,000) or 32 (6,400) respectively. This
improvement makes the Cruisers viable against Dreadnaughts (but not
against Titans). So, do not underestimate the value of Command Centers.


A wise attacker reduces his damage profile (how much he will lose) by
sending the minimum quantity of fleet necessary to destroy the defense
fleet. It does not matter if your fleet can deliver 50 percent more
damage if the attacker does not give you the extra fleet to kill. He
needs the firepower to kill your defense fleet regardless of your
Command Centers.

<h3> <a name='toc6' id='toc6'> </a>Turrets</h3>

<blockquote>
  <strong>Best of Three Rule of Thumb:</strong> With Turrets, build three of your best, disband the rest.

</blockquote>

This guide groups Turrets together. They do not benefit from Command
Centers. When you look at the destructive value of Turrets, you discover
they are weak. In the beginning of your empire (before Level 20)
Unshielded Turrets, Ion Turrets and Photon Turrets are of some utility.
The rule of thumb is three of your best turrets, and always scrap the
weaker turrets. You need the space for other structures. Weaker turrets
can undermine the value of the higher turrets. You will notice, however,
that Turrets have limits.


For example, the Photon Turret delivers 480 points per structure, or
1,440 at the Three-Turret Rule. That is suitable for bases with a value
of 2,900. Based on the table above, this is a base with an Econ of 70 or
less; assuming the fleet can protect the trade
routes.<sup> <a href='#fn-3'>3</a> </sup>


By contrast, Disruptor Turrets provide 4,032, which handles a base
economy of 86. Many Veteran players recommend that bases not exceed
that economy until you attain Planetary Rings. Keeping the economy under
100 is what I would recommend.


Unshielded Turrets are useful only when the player is threatened
primarily by Destroyers, Corvettes and Fighters. They are built in the
early days of the Empire, then quickly upgraded to Photon and Disruptor.
Ion Turrets have value in their shield penetrability, able to place 510
power against shielded units.

<h3> <a name='toc7' id='toc7'> </a>Shields</h3>
<blockquote>

Shields raise the &#8220;price of admission&#8221; for an attacker, but not the
&#8220;price of conquest.&#8221; Build shields to support planetary rings---only.

</blockquote>

Planetary Shields, and the lesser cousin the Deflection Shields, provide
a measure of protection for your turrets and Planetary Rings. Shields
regenerate the defenses (turrets and rings) when an attack does not
destroy them. The amount of regeneration is based on a percentage of the
remaining defensive strength. Fortunately, the battle report has two
values that help with this calculation: &#8220;Start Defenses&#8221; and &#8220;End Defenses.&#8221; To calculate regeneration, multiply the original defensive
level by the End Defenses percentage (e.g. Defense * .65 for a End
Defenses of 65 percent). End Defenses are calculated based on the sum of
armour present at the end of the battle divided by the sum of the
full-strength armor.

<h3> <a name='toc8' id='toc8'> </a>Planetary Rings</h3>

Planetary Rings are the first true deterrent to capital ships. A bank of
Prings delivers 15,360 points of Photonic trouble to any
attacker.<sup> <a href='#fn-4'>4</a> </sup>


Following the **Best of Three Rule of Thumb**, you should seek to have three levels
of Planetary Rings, which delivers 15,360 points. Against a Death Star,
it would inflict 14,790 power. Three sets would deliver
44,370 power, able to take down a Death Star, three Levis, ten Titans,
or 85 Cruisers.<sup> <a href='#fn-5'>5</a> </sup>
The point is that a Planetary Ring is sufficient to defend a combined
base value of over 40,000 credits.


&#8220;Pringles&#8221; is a term for a pair of Prings and Pshields. When you finish
a set of Pringles, then you can start downsizing your defensive fleet.
Or, more accurately, you can get those lazy bums into the attack. With
Pringles-2, you can usually drop your defenses down to about 4000 FT and
2 BB.

<blockquote>

I have information on the optimal defensive fleet configurations below, which supersedes the above reference to fighters and BBs.

</blockquote>
<h3> <a name='toc9' id='toc9'> </a>Trade Pring Effect</h3>

When efficiently defending a base, the first pring is actually dedicated to supporting the base defense fleet. Merovech calls this the Trade Pring Effect. When the base has long-distance trades and Dreads defending them, the value of the base, trades and derbs exceeds a single pring's ability to defend them. Therefore, you need to discount the first pring in your base defenses.

<h3> <a name='toc10' id='toc10'> </a>Practical Example</h3>
<div class='alert alert-info' >

Merovech attained prings in the following timeframes:

<ul>
  <li>First pring in Epsilon + 69 in a E7 cluster galaxy.
</li>
<li>First pring in Fenix + 51 in a F1 cluster galaxy.
</li>
<li>First pring in Gamma + 49 in a G1 cluster galaxy.
</li>
<li>First pring in Helion + 46 in a H0 cluster galaxy.
</li>
<li>First pring in Ixion + 45 days in a I0 cluster galaxy.
</li>
</ul>
</div>

How does Merovech reach prings quickly? When in scenarios where there
are players more than ten levels above him, he rigidly adheres to the
principle of staying under Level 30. This limits This limits the
&#8220;overhead&#8221; threat of higher level players, but leaves him somewhat
vulnerable.


Merovech has managed to build prings without researching Disruptor (even
in a zero-cluster galaxy) or having Disruptor turrets by keeping with
the defense standards below.


To remain below Level-30 your combined economy (times 100), fleet and
technology must be less than 810,000.

<blockquote>

810,000 &gt; (econ * 100) + Fleet + Technology

</blockquote>

With all technology required for Planetary Rings, Merovech usually has
less than 340,000 technology. He keeps his fleet to under 150,000. Under
this formula, he needs to keep his economy under 3,200. He could double
his fleet to 300,000 and keep his economy under 2,100 and stayed below
Level-30. However, this leaves him vulnerable to Levels above 37, which
geometrically increased his vulnerability. So, at Level-27, Merovech
started building five of the ten necessary Planetary Rings to defend his
bases.


When at the beginning of a server, staying under Level 30 does not
matter. However, Merovech typically stays under Level 30 out of habit.
He keeps as few as 500 Fighters overhead, the rest of his fleet is
mobile. With 10 bases, 500 Fighters total only 25,000 total fleet. As
Merovech adds one base per month, he typically has 12 bases by the time
he builds prings.


Each base met or slightly exceeds the minimum construction goals of the
<a class='wikilink' href='/astro-empires/advanced-base-guide'>Advanced Base Guide</a>, with a 19:15:8:2 MR:RF:NF:AF <a class='wikilink' href='/astro-empires/production-structures'>production structures</a>
ratio. The bases also had Command Centers-10, and in many
cases Spaceports-15. When building prings on an Asteroid, these
structures complete the work in under six days; depending on your
Cybernetics. It normally takes Merovech 10 days to build prings on a
Moon. Merovech never settles on a Planet.

<a name='standards' id='standards'>
</a> <span class='bburl'>[url=http://dausha.net/astro-empires/base-defense-guide#standards#standards [/url]</span>

<h2> <a name='toc11' id='toc11'> </a>Standards</h2>

This section offers a suggested set of personal standards the player
should strive to. The fundamental goal is to ensure you have enough
defenses to deter a profit-seeker, and enough fleet to protect the trade
routes.

<h3> <a name='toc12' id='toc12'> </a>Command Centers</h3>

The table below offers standards for Command Centers based on economy;
though Merovech argues more than 10 is a waste of space after prings.
The goal is to boost your defensive fleet's power to reduce your rival's
ability to take your trade routes. At base essentially increases its
economy by 20 percent per trade route, so the requirement follows. The
Metal Refinery column is for those who like to balance their structure
builds. The cost of that level of Refinery is approximate to the level
of Command Center.

<table class='table table-hover table-condensed'>
  <thead>
  <tr>
    <th>Econ</th>
    <th>Count</th>
    <th>Metal Refineries</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>&lt; 50</td>
    <td>5</td>
    <td>12</td>
  </tr>
  <tr>
    <td>&lt; 100</td>
    <td>10</td>
    <td>17</td>
  </tr>
  <tr>
    <td>Free Players</td>
    <td>10</td>
    <td>17</td>
  </tr>
  <tr>
    <td>&lt; 150</td>
    <td>15</td>
    <td>22</td>
  </tr>
  <tr>
    <td>&gt; 150</td>
    <td>20</td>
    <td>&nbsp;</td>
  </tr>
  </tbody>
</table>
<h3> <a name='toc13' id='toc13'> </a>Turrets and Prings</h3>

The table below illustrates the relative value of structures and the
economy they may be able to protect, based on the power delivered and
the pillage bonus of the
base.<sup> <a href='#fn-6'>6</a> </sup>
When considering these defenses, you must
remain aware of the efficiency of larger units (e.g. Battleships)
against defenses and adjust accordingly.

<blockquote>

Build the highest turret you have researched to the quantity necessary
to satisfy your economic defense needs, but at least 2.  Disband all
lesser turrets.

</blockquote>

<a name='defensestandard' id='defensestandard'>
</a> <span class='bburl'>[url=http://dausha.net/astro-empires/base-defense-guide#defensestandard#defensestandard [/url]</span>

<table class='table table-hover table-condensed'>
  <thead>
  <tr>
<th>Defense</th>
<th>Power (@10)</th>
<th>Econ</th>
<th>Power (@15)</th>
<th>Econ</th>
</tr>
</thead>
<tbody>
  <tr>
<td>Barracks</td>
<td>77</td>
<td>&lt; 12</td>
<td>115</td>
<td>&lt; 15</td>
</tr>
<tr>
<td>Laser Turrets</td>
<td>150</td>
<td>&lt; 16</td>
<td>225</td>
<td>&lt; 20</td>
</tr>
<tr>
<td>Missile Turrets</td>
<td>220</td>
<td>&lt; 20</td>
<td>330</td>
<td>&lt; 25</td>
</tr>
<tr>
<td>Plasma Turrets</td>
<td>400</td>
<td>&lt; 27</td>
<td>600</td>
<td>&lt; 33</td>
</tr>
<tr>
<td>Ion Turrets</td>
<td>465</td>
<td>&lt; 30</td>
<td>690</td>
<td>&lt; 35</td>
</tr>
<tr>
<td>Photon Turrets</td>
<td>965</td>
<td>&lt; 42</td>
<td>1440</td>
<td>&lt; 50</td>
</tr>
<tr>
<td>Disruptor Turrets-5</td>
<td  colspan='3'>1,344</td>
<td  >&lt; 50</td>
</tr>
<tr>
<td>Disruptor Turrets-10</td>
<td  colspan='3'>2,688</td>
<td  >&lt; 70</td>
</tr>
<tr>
<td>Disruptor Turrets-15</td>
<td  colspan='3'>4,032</td>
<td  >&lt; 86</td>
</tr>
<tr>
<td>Prings-5</td>
<td  colspan='3'>15,360</td>
<td  >&lt; 168</td>
</tr>
<tr>
<td>Prings-10</td>
<td  colspan='3'>30,720</td>
<td  >&lt; 238</td>
</tr>
<tr>
<td>Prings-15</td>
<td  colspan='3'>46,090</td>
<td  >&lt; 290</td>
</tr>
<tr>
<td>Prings-20</td>
<td  colspan='3'>61,440</td>
<td  >&lt; 337</td>
</tr>
</tbody>
</table>
<ul>
  <li>Power@10 means two turret structures of that type (e.g. Laser Turret-10)
</li>
<li>Power@15 means three turret structures of that type (e.g. Ion Turret-10)
</li>
</ul>
<blockquote>

Do not group turrets. Weaker turrets provide substantially less
protection as the base economy increases.

</blockquote>
<h3> <a name='toc14' id='toc14'> </a>Shields</h3>

The rule for shields is easy. When you have researched enough for
Deflection shields, build one level. When you have researched Planetary
Shields, you build two. Disband the Deflection Shields when the first
Planetary Shield is built. The net result is Pring-15, Pshield-10.

<h3> <a name='toc15' id='toc15'> </a>Fleet</h3>

Defense fleets protect the trade routes. Before you have prings,
constrain yourself to self-trades or short-distance (&lt;1000 paces)
trades. This reduces profits made by the attacker. Once you have prings,
you can start moving toward long-distance trades (LD trades). You should
also push for Dread tech to protect your LD trades. As Dreads use the
same technology as prings, make sure you pay attention to Warp tech.


How much fleet? Merovech's calculations is one Dread for every 7,400
paces of trades. That's about seven power per pace. While a Dread is
inefficient against Cruisers, Heavy Cruisers and Battleships, the base
prings will kill any of those units not killed by the Dreads---leveling
the playing field.

<blockquote >

When relying on base prings to cover Dreads, do <em>not</em> use that pring in
calculating the base defense coverage! It either supports the base or
the trades. Otherwise, an attacker can hit the base, the trades and
collect the derbs for a modest profit.

</blockquote>
<h2> <a name='toc16' id='toc16'> </a>Conclusion</h2>

To have adequate defenses, the player needs to ensure they have a
balance of fleet, command centers and base defenses. The fleet protects
itself and the trade routes and benefits from the Command Centers. The
base defenses should be able to offset the pillage bonus, plus a ratio
of the cash-in-hand. With this model followed, a base is an inefficient
target, but is still vulnerable to a motivated rival. This guide seeks
to inform the player in an approach to analyzing base defenses, but
expects the player to adjust to his specific needs. This guide further
seeks to show the player that Astro Empires is a bean-counting endeavor,
and that taking time to look at the underlying structure helps find
efficient ways to play the game.

<div  id='footnotes'>
<ol>
  <li><a name='fn-1' id='fn-1'> </a>  For this reason, you should always squirrel away extra income in long-term technology or construction that you can cancel when you need the credits.
</li>
<li><a name='fn-2' id='fn-2'> </a>  The Cruisers would deliver 6 points of damage after passing through the shields, and the Dread has 768 armour points
</li>
<li><a name='fn-3' id='fn-3'> </a>  The power of the Photon Turret here is inflated to Photon-10, as are all examples here
</li>
<li><a name='fn-4' id='fn-4'> </a>  Remember, the power and armor shown in the Tables page of AE is before you apply the bonus for technology. You need Photon-10, which raises the base Power by 50 percent
</li>
<li><a name='fn-5' id='fn-5'> </a>  Cruisers are the most efficient unit against Planetary Rings
</li>
<li><a name='fn-6' id='fn-6'> </a>  The table is based on the technology Merovech attained to build Planetary Rings, with the exception of Disruptor Turrets. It is advised that the player calculate his own defense's power and adjust the economy accordingly.
</li>
</ol>
</div>
