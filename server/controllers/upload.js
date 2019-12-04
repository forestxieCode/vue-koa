module.exports = async (ctx, next) => {
    ctx.body = {
        filename:'/uploads/'+ctx.req.file.filename
    }
}
