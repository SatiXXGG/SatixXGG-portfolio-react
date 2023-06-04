
import configui from "./ExamplesFolder/config-ui.png"
import menuui from "./ExamplesFolder/menu-ui.png"
import shopui from "./ExamplesFolder/shop-ui.png"
import statusui from "./ExamplesFolder/statusbar-ui.png"
import edificiobuild from "./ExamplesFolder/edificio-build.png"
import salonbuild from "./ExamplesFolder/salon-build.png"
import islabuild from "./ExamplesFolder/isla-build.png"
import ArmsVideo from "./ExamplesFolder/arms-video.mp4"
import RoundMenu from "./ExamplesFolder/round-menu.mp4"
import IntSystem from "./ExamplesFolder/int-system.mp4"
import GtaMenu from "./ExamplesFolder/gta-menu.mp4"
import StaminaBar from "./ExamplesFolder/stamina-bar.mp4"
import DynamicUi from "./ExamplesFolder/dynamic-ui.mp4"
import pvpGame from "./ExamplesFolder/pvp-system.mp4"

export default [
    //["toomiska", "Very quick and extremely helpful in such a short time. Revised it extremely quickly, had no problems asking for my help and opinions, delivered before the deadline and and a reasonable price", vid1, "05/13/23"]
    ["Configuration UI", "Just a normal configuration UI for user profiles", configui, "03/14/23", "UI"],
    ["Menu UI", "Menu UI with diferent options and custom cameras for every option", menuui, "03/28/23", "UI"],
    ["Shop UI", "Daily shop UI with a opening animation and with different options  as Bloxy cola and chicken", shopui, "01/23/23", "UI"],
    ["Status bar UI", "A status bar UI for the player with components like health bar / xp bar, name and weather", statusui, "02/17/23", "UI"],
    //Buildings
    ["Nakano building", "A building from the anime 'The Quintessential Quintuplets'", edificiobuild, "11/27/22", "BU"],
    ["Salon build", "The salon from the popular game 'Doki Doki Literature Club'", salonbuild, "07/19/22", "BU"],
    ["Island build", "A island with a mini bathroom", islabuild, "02/15/19", "BU"],
    //Scripting i think
    ["Dynamic Arms optimized client-server", "Dynamic moving arms and head Using IK and Motor6D", ArmsVideo, "02/15/19", "PR", "vid"],
    ["Rounded menu style", "Rounded menu with 4 options that can open by clicking a it", RoundMenu, "08/12/22", "PR", "vid"],
    ["Interaction system", "Advanced customizable interaction system with cooldown", IntSystem, "10/10/23", "PR", "vid"],
    ["GTA Style menu", "Advanced customizable GTA menu with options as change numbers, bools, strings and actions", GtaMenu, "05/27/22", "PR", "vid"],
    ["Dynamic stamina bar", "Advanced and dynamic stamina bar like Genshin Impact game", StaminaBar, "08/13/20", "PR", "vid"],
    ["UI opening animation", "Opening animation for almost every item, clean and cool", DynamicUi, "08/13/20", "PR", "vid"],
    ["Almost complete PVP&PVE game", "(ONLY SCRIPTING) Advanced melee system, inventory, shop, and squad system", pvpGame, "03/01/23", "PR", "vid"]
]