<div class="selector__wrapper">
    <div class="selector__container">
        <select name="language" id="language">
            <option value="EN">EN</option>
        </select>
        <div class="flag__container"><img src="/flag-UK.svg" alt="flag" srcset="/flag-UK.svg 1x, /flag-UK@2x.svg 2x"></div>
    </div>
</div>

<style>
    .selector__wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: var(--site-white);
        padding: 0.25rem var(--outerPadLg);
    }

    .selector__container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .selector__container select {
        height: 1rem;
        border: none;
        background-color: var(--site-white);
        margin-right: 0.25rem;
    }

    .flag__container {
        height: 1.2rem;
    }

    .flag__container img {
        height: 100%;
        width: 100%;
    }
</style>