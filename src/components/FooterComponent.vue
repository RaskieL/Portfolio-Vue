<template>
    <div class="footer">
        <h2>Site réalisé par Maïken D'Angelo</h2>
        <p style="margin-bottom: 2vh;"><strong>Technologies utilisées:</strong> HTML, CSS, VueJs, TailwindCSS</p>
        <hr>
        <div class="link-columns">
            <div class="link-column">
                <h3>Comptes Git</h3>
                <a href="">RaskieL</a>
                <a href="">MaikenDANGELO</a>
                <a href="#">Gitlab</a>
            </div>
            <div class="link-column">
                <h3>Liens utiles</h3>
                <a href="#">lien</a>
                <a href="#">lien</a>
                <a href="#">lien</a>
            </div>
        </div>
        <div class="version"><p>v1.0</p></div>
    </div>
</template>

<script>

</script>

<style scoped>
.footer{
    background-color: rgba(20,20,20,0.1);
    max-height: 450px;
    padding: 1%;
    margin-left: auto;
    margin-right: auto;
}
.link-columns{
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    gap: 25%;
    margin-top: 3vh;

}
.link-column{
    display: flex;
    flex-direction: column;
}
.version{
    position: relative;
    top: 20px;
    text-align: right;
}
</style>