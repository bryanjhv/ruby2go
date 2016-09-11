`this.reset = function () {
  // Flush previous input
  delete $gvars.input00030879566461206043;
};`


class Input00035400510227256987
  def initialize(lines)
    @lines = lines.flatten.map(&:to_s)
    @count = @lines.length - 1
    @index = -1
  end

  def read
    return nil if @index == @count

    @lines[@index += 1] + "\n"
  end
end

def with_input(*args)
  $input00030879566461206043 = Input00035400510227256987.new(args)
end

module Kernel
  def gets(*)
    raise 'No data available to read.' unless $input00030879566461206043

    $_ = $input00030879566461206043.read
  end
end
