/**
 * @name BetterMorseCode
 * @author STIHLjestempila
 * @description Morse code translator
 * @version 0.0.1
 * @authorId 476399653307416586
 * @source https://github.com/STIHLjestempila/BetterDiscord
 */

module.exports = class BetterMorseCode
{
    start()
    {
        const path = "M 0 25.875 L 20.25 25.875 L 20.25 19.125 L 0 19.125 L 0 25.875 Z M 2.25 14.625 L 18 12.375 L 18 10.125 L 2.25 12.375 L 2.25 14.625 Z M 7.875 19.125 L 7.875 13.8218 L 12.375 13.1783 L 12.375 19.125 Z M 15.75 19.125 L 15.75 15.75 L 18 15.75 L 18 19.125 Z";
        const button = Object.assign(document.createElement("button"), {style:"background:#40444B;", onclick: () => this.onClick() });
        button.innerHTML = `<svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path clip-rule: evenodd fill-type="evenodd" fill="#B9BBBE" d="${path}"/></svg>`;
            
        document.getElementsByClassName("buttons-uaqb-5")[0].append(button);
    }

    stop()
    { 
        document.getElementsByClassName("buttons-uaqb-5")[0].removeChild(document.getElementsByClassName("buttons-uaqb-5")[0].lastChild);
    }

    onSwitch()
    {
        if (document.getElementsByClassName("buttons-uaqb-5")[0].childElementCount <= 4)
        {
            const path = "M 0 18 L 18 18 L 18 12 L 0 12 L 0 18 Z M 2 8 L 16 6 L 16 4 L 2 6 L 2 8 Z M 7 12 L 7 7.286 L 11 6.714 L 11 12 Z M 14 12 L 14 9 L 16 9 L 16 12 Z";
            const button = Object.assign(document.createElement("button"), {style:"background:#40444B;", onclick: () => this.onClick() });
            button.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill-type="evenodd" fill="#B9BBBE" d="${path}"/></svg>`;
                
            document.getElementsByClassName("buttons-uaqb-5")[0].append(button);
        }
    }

    onClick()
    {
        BdApi.showConfirmationModal("Enter Your Data Input", BdApi.React.createElement("input", { id: "data" }), {onConfirm: () => this.onConfirm()});
    }
    
    onConfirm()
    {
        var data1 = document.getElementById("data").value;

        data1 = this.convert(data1);

        BdApi.showConfirmationModal("Output", String(data1));
    }
    
    //placeholder-1_mJY1 buttons-uaqb-5 title-17SveM base-21yXnu

    convert(data)
    {
        var convertables = ['.-/', '-.../', '-.-./', '-../', './', '..-./', '--./', '..../', '../', '../', '-.-/', '.-../', '--/', '-./', '---/', '.--./', '--.-/', '.-./', '.../', '-/', '..-/', '...-/', '.--/', '-..-/', '-.--/', '--../'];
        var output = "";
        
        for (let i = 0; i < data.length; i++)
        {
            for (let j = 0; j < 26; j++)
            {
                if (data.charCodeAt(i) - 97 == j)
                {
                    output += convertables[j];
                }
            }
        }

        return (output);
    }
}
