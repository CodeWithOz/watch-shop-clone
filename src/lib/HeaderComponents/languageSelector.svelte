<div class="selector__wrapper">
    <div class="selector__container">
        <select name="language" id="language">
            <option value="EN">EN</option>
        </select>
        <div class="flagContainer"><img src="/flag-UK.svg" alt="flag" srcset="/flag-UK.svg 1x, /flag-UK@2x.svg 2x"></div>
    </div>
</div>

<style>
    .selector__wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: var(--site-white);
        padding: 0 var(--outerPadLg);
    }

    .selector__container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>