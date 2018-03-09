var lineReader = require('line-reader');
//var popup = require('popups');
/**
 * Send the contents of an HTML page to the client.
 * @param fileName the name of the file containing the HTML page.
 * @param result the HTTP result.
 */
function sendPage(fileName, result)
{
    var html = '';
    
    // Read the file one line at a time.
    lineReader.eachLine(fileName,
        /**
         * Append each line to string html.
         * Send the contents of html to the client
         * after the last line has been read.
         * @param line the line read from the file.
         * @param last set to true after the last line.
         */
        function(line, last)
        {
            html += line + '\n';

            if (last) 
            { 
                result.send(html);
                return false; 
            }
            else
            {
                return true;
            }
        });
}

/**
 * Send the contents of an HTML page to the client
 * with an inserted body text.
 * @param text the body text.
 * @param result the HTTP result.
 */
function sendBody(text, result)
{
    var html = '<!DOCTYPE html>\n'
        + '<html lang="en-US">\n'
        + '<head>\n'
        + '    <meta charset="UTF-8">\n'
        + '    <title>Form Examples</title>\n'
        + '</head>\n'
        + '<body>\n'
        + '    ' + text + '\n'  // insert the body text
        + '</body>\n'
        + '</html>\n';
    
    result.send(html);    
}

/**
 * Extract the first and last names from the request.
 * @param request the HTTP request.
 * @returns a string containing the first and last names.
 */
function getName(request)
{
    var firstName = request.param('firstName');
    var lastName  = request.param('lastName');
    
    return firstName + ' ' + lastName + '!';
}

/**
 * Extract the strong and emphasized values from the request.
 * Surround the text with <strong> or <em> tags.
 * @param text the text to surround.
 * @param request the HTTP request.
 * @returns a string containing the surrounded text.
 */
function modify(text, request)
{
    if (request.body.strong)
    {
        text = '<strong>' + text + '</strong>'; 
    }
    
    if (request.body.em)
    {
        text = '<em>' + text + '</em>'; 
    }
    
    return text;
}

module.exports.landing = function(request, result) 
{
    sendPage('landing.html', result);
};

module.exports.home = function(request, result) 
{
    sendPage('index.html', result);
};

module.exports.login = function(request, result) 
{
    sendPage('login.html', result);
};

module.exports.postlogin = function(request, result) 
{
    sendPage('index.html', result);
};

module.exports.post_login = function(request, result) 
{
    console.log("request--->",request)
    console.log("request--->",request.body.username)
    
    var username = request.body.username;
    var password = request.body.password;
    if (username == "ronmak" && password == "Ronmak123"){
        sendPage('index.html', result);
    }
    else{
        sendPage('login.html', result);
    }
};

module.exports.register = function(request, result) 
{
    sendPage('register.html', result);
};

module.exports.post_register = function(request, result) 
{
    sendPage('login.html', result);
};

module.exports.get_feedback = function(request, result) 
{
    sendPage('feedback.html', result);
};

module.exports.get_textfields = function(request, result) 
{
    sendPage('text.html', result);
};

module.exports.post_textfields = function(request, result) 
{
    var text = '    Hello, ' + getName(request);
    sendBody(text, result);
};

module.exports.get_checkboxes = function(request, result) 
{
    sendPage('checkbox.html', result);
};

module.exports.post_checkboxes = function(request, result) 
{
    var text = '    Hello, ' + getName(request);    
    text = modify(text, request);
    sendBody(text, result);
};

module.exports.get_radiobuttons = function(request, result) 
{
    sendPage('radio.html', result);
};

module.exports.post_radiobuttons = function(request, result) 
{
    var direction = request.body.direction;
    var text = direction === 'coming' ? 'Hello' : 'Goodbye';
    
    text = text + ', ' + getName(request);
    text = modify(text, request);
    sendBody(text, result);
};

module.exports.get_menu = function(request, result) 
{
    sendPage('select.html', result);
};


module.exports.feedback = function(request, result) 
{
    sendPage('feedback.html', result);
};



module.exports.post_menu = function(request, result) 
{
    var direction = request.body.direction;
    var language  = request.body.language;
    var text;
    
    // Process language and direction.
    if (direction === "coming") 
    {
        switch (language) 
        {
            case "english":
                text = "Hello";
                break;
            case "french":
                text = "Bonjour";
                break;
            case "german":
                text = "Guten tag";
                break;
            default:
                text = "";
        }
    }
    else if (direction === "going") 
    {
        switch (language) 
        {
            case "english":
                text = "Goodbye";
                break;
            case "french":
                text = "Au revoir";
                break;
            case "german":
                text = "Auf wiedersehen";
                break;
            default:
                text = "";
        }
    }
           
    text = text + ', ' + getName(request);
    text = modify(text, request);
    sendBody(text, result);
};
